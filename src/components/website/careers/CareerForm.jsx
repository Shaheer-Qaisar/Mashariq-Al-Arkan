import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { useState } from "react";

const professions = [
  "Software Engineer",
  "Electrician",
  "Security Technician",
  "Network Engineer",
  "Project Manager",
  "Other",
];

export default function CareerForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    profession: "",
    coverLetter: "",
  });

  const [cvFile, setCvFile] = useState(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) {
      toast.error("File must be under 10MB");
      return;
    }

    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed");
      return;
    }

    setCvFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cvFile) {
      toast.error("Please upload your CV (PDF)");
      return;
    }

    if (!captchaVerified) {
      toast.error("Please verify captcha");
      return;
    }

    // ✅ PRINT EVERYTHING TO CONSOLE
    console.log("Form Data:", formData);
    console.log("Uploaded CV:", {
      name: cvFile.name,
      size: cvFile.size,
      type: cvFile.type,
    });

    toast.success("Form submitted (check console)");

    // Optional reset
    setFormData({
      name: "",
      phone: "",
      email: "",
      profession: "",
      coverLetter: "",
    });
    setCvFile(null);
    setCaptchaVerified(false);
  };

  return (
    <Grid size={{ xs: 12, md: 6 }} minWidth={600} my={[4]} justifySelf={'center'}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          backgroundColor: "#f9fafb",
          p: { xs: 3, md: 4 },
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={3}>
          Apply Now
        </Typography>

        <Stack spacing={3}>
          {/* Name & Phone */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                InputLabelProps={{ required: false }}

              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                InputLabelProps={{ required: false }}

              />
            </Grid>
          </Grid>

          {/* Email */}
          <TextField
            fullWidth
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            InputLabelProps={{ required: false }}

          />

          {/* Profession */}
          <FormControl fullWidth required>
            <InputLabel>Your Profession</InputLabel>
            <Select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              label="Your Profession"
            >
              {professions.map((p) => (
                <MenuItem key={p} value={p}>
                  {p}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* CV Upload */}
          <Button variant="outlined" component="label">
            {cvFile ? `Selected: ${cvFile.name}` : "Upload CV (PDF, max 10MB)"}
            <input
              type="file"
              hidden
              accept="application/pdf"
              onChange={handleFileChange}
            />
          </Button>

          {/* Cover Letter */}
          <TextField
            fullWidth
            multiline
            rows={5}
            label="Cover Letter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
            InputLabelProps={{ required: false }}

          />

          {/* CAPTCHA */}
          <ReCAPTCHA
            sitekey="6LcvwT4sAAAAAHiTvP-GIVGs7NbcMVbdpdu8XjaA"
            onChange={() => setCaptchaVerified(true)}
          />

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            disabled={!captchaVerified}
            sx={{ py: 1.5 }}
          >
            Submit Application
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}
