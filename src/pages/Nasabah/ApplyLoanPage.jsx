import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export default function ApplyLoanPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    income: '',
    loanAmount: '',
    tenorValue: '',
    tenorUnit: '',
    purposeCategory: '',
    purposeDescription: '',

    ktp: null,
    selfie: null,
    businessInfo: null,
    businessLicense: null,
    npwp: null,
  })

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleFileChange(e) {
    const { name, files } = e.target

    setForm({
      ...form,
      [name]: files[0],
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (
      Object.values(form).some(
        value => value === '' || value === null || value === undefined
      )
    ) {
      alert('Please fill in all fields.')
      return
    }

    const formData = new FormData()

    Object.keys(form).forEach((key) => {
      formData.append(key, form[key])
    })
    formData.append('user_id', user.id)

    try {
      const response = await fetch(
        'http://127.0.0.1:8000/api/loan-application',
        {
          method: 'POST',
          body: formData,
        }
      )

      console.log('STATUS:', response.status)

      const text = await response.text()

      console.log('RESPONSE:', text)

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      alert('Application submitted successfully!')

      navigate('/module') // or whatever route you want

    } catch (err) {
      console.error(err)
      alert(err.message)
    }
  }

    return (
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: '#f4f6f8',
          py: 6,
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              borderRadius: 4,
              boxShadow: 6,
            }}
          >
            <CardContent sx={{ p: 5 }}>
              {/* Header */}
              <Typography
                variant="h4"
                fontWeight={700}
                textAlign="center"
                color="success.main"
                mb={1}
              >
                Loan Application
              </Typography>

              <Typography
                variant="body1"
                textAlign="center"
                color="text.secondary"
                mb={5}
              >
                Complete the form below to apply for a business loan.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>

                  {/* Income */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Average Monthly Income"
                      name="income"
                      type="number"
                      value={form.income}
                      onChange={handleChange}
                    />
                  </Grid>

                  {/* Loan Amount */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Loan Amount Requested"
                      name="loanAmount"
                      type="number"
                      value={form.loanAmount}
                      onChange={handleChange}
                    />
                  </Grid>

                  {/* Tenor Value */}
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Tenor Value"
                      name="tenorValue"
                      placeholder="e.g. 12"
                      value={form.tenorValue}
                      onChange={handleChange}
                    />
                  </Grid>

                  {/* Tenor Unit */}
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                      <InputLabel>Tenor Unit</InputLabel>

                      <Select
                        label="Tenor Unit"
                        name="tenorUnit"
                        value={form.tenorUnit}
                        onChange={handleChange}
                      >
                        <MenuItem value="minggu">
                          Minggu
                        </MenuItem>

                        <MenuItem value="bulan">
                          Bulan
                        </MenuItem>

                        <MenuItem value="tahun">
                          Tahun
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Purpose Category */}
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Purpose Category</InputLabel>

                      <Select
                        label="Purpose Category"
                        name="purposeCategory"
                        value={form.purposeCategory}
                        onChange={handleChange}
                      >
                        <MenuItem value="modal_usaha">
                          Modal Usaha
                        </MenuItem>

                        <MenuItem value="operasional">
                          Operasional
                        </MenuItem>

                        <MenuItem value="pendidikan">
                          Pendidikan
                        </MenuItem>

                        <MenuItem value="renovasi">
                          Renovasi
                        </MenuItem>

                        <MenuItem value="ekspansi">
                          Ekspansi
                        </MenuItem>

                        <MenuItem value="lainnya">
                          Lainnya
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  {/* Purpose Description */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={4}
                      label="Purpose Description"
                      name="purposeDescription"
                      value={form.purposeDescription}
                      onChange={handleChange}
                    />
                  </Grid>

                  {/* Upload Files */}
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      mb={2}
                      mt={2}
                    >
                      Required Documents
                    </Typography>
                  </Grid>

                  {/* KTP */}
                  <Grid item xs={12} md={6}>
                    <Button
                      component="label"
                      variant="outlined"
                      fullWidth
                      color="success"
                    >
                      Upload National ID / KTP
                      <input
                        hidden
                        type="file"
                        name="ktp"
                        onChange={handleFileChange}
                      />
                    </Button>

                    {form.ktp && (
                      <Typography mt={1} variant="body2">
                        {form.ktp.name}
                      </Typography>
                    )}
                  </Grid>

                  {/* Selfie */}
                  <Grid item xs={12} md={6}>
                    <Button
                      component="label"
                      variant="outlined"
                      fullWidth
                      color="success"
                    >
                      Upload Selfie With ID
                      <input
                        hidden
                        type="file"
                        name="selfie"
                        onChange={handleFileChange}
                      />
                    </Button>

                    {form.selfie && (
                      <Typography mt={1} variant="body2">
                        {form.selfie.name}
                      </Typography>
                    )}
                  </Grid>

                  {/* Business Info */}
                  <Grid item xs={12} md={6}>
                    <Button
                      component="label"
                      variant="outlined"
                      fullWidth
                      color="success"
                    >
                      Upload Business Information
                      <input
                        hidden
                        type="file"
                        name="businessInfo"
                        onChange={handleFileChange}
                      />
                    </Button>

                    {form.businessInfo && (
                      <Typography mt={1} variant="body2">
                        {form.businessInfo.name}
                      </Typography>
                    )}
                  </Grid>

                  {/* Business License */}
                  <Grid item xs={12} md={6}>
                    <Button
                      component="label"
                      variant="outlined"
                      fullWidth
                      color="success"
                    >
                      Upload Business License
                      <input
                        hidden
                        type="file"
                        name="businessLicense"
                        onChange={handleFileChange}
                      />
                    </Button>

                    {form.businessLicense && (
                      <Typography mt={1} variant="body2">
                        {form.businessLicense.name}
                      </Typography>
                    )}
                  </Grid>

                  {/* NPWP */}
                  <Grid item xs={12}>
                    <Button
                      component="label"
                      variant="outlined"
                      fullWidth
                      color="success"
                    >
                      Upload NPWP
                      <input
                        hidden
                        type="file"
                        name="npwp"
                        onChange={handleFileChange}
                      />
                    </Button>

                    {form.npwp && (
                      <Typography mt={1} variant="body2">
                        {form.npwp.name}
                      </Typography>
                    )}
                  </Grid>
                </Grid>

                {/* Buttons */}
                <Stack
                  direction="row"
                  spacing={2}
                  justifyContent="space-between"
                  mt={5}
                >
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="large"
                  >
                    Go Back
                  </Button>

                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    size="large"
                  >
                    Submit Application
                  </Button>
                </Stack>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    )
  }