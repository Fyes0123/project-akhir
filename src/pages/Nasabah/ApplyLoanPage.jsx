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
} from '@mui/material'

export default function ApplyLoanPage() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    address: '',
    income: '',
    expenses: '',
    loanAmount: '',
    paymentPeriod: '',
    purpose: '',
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

  function handleSubmit(e) {
    e.preventDefault()

    console.log(form)

    alert('Loan application submitted successfully!')
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
                {/* Full Name */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Phone */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Address */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                  />
                </Grid>

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

                {/* Expenses */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Average Monthly Expenses"
                    name="expenses"
                    type="number"
                    value={form.expenses}
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

                {/* Payment Period */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Preferred Payment Period"
                    name="paymentPeriod"
                    placeholder="e.g. 12 Months"
                    value={form.paymentPeriod}
                    onChange={handleChange}
                  />
                </Grid>

                {/* Purpose */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Purpose of the Loan"
                    name="purpose"
                    value={form.purpose}
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