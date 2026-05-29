import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const modules = [
  {
    title: "Loan Services",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
  },
  {
    title: "Merchant Loan Approval",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
  },
  {
    title: "Repayment Schedule",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
  },
  {
    title: "Late Payment",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
  },
];

export default function ModulePage() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", p: 4 }}>

      {/* Header */}
      <Box
        sx={{
          bgcolor: "#14532d",
          color: "white",
          py: 2,
          textAlign: "center",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Typography variant="h5" fontWeight={700}>
          Talking Module
        </Typography>
      </Box>

      {/* Content */}
      <Box
        sx={{
          bgcolor: "#166534",
          p: 4,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        }}
      >

        {/* GRID 2 KOLOM */}
        <Grid container spacing={4}>

          {modules.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>

              <Card sx={{ borderRadius: 3, overflow: "hidden" }}>

                {/* Image */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                  }}
                />

                {/* Text */}
                <CardContent>
                  <Typography
                    variant="h6"
                    textAlign="center"
                    fontWeight={600}
                  >
                    {item.title}
                  </Typography>
                </CardContent>

              </Card>

            </Grid>
          ))}

        </Grid>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 5,
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#84cc16",
              color: "black",
              fontWeight: 700,
              px: 4,
            }}
          >
            Proceed
          </Button>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#84cc16",
              color: "black",
              fontWeight: 700,
              px: 4,
            }}
          >
            Go Back
          </Button>
        </Box>

      </Box>
    </Box>
  );
}