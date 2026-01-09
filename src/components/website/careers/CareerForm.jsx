'use client';

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

import data from "./CareerData.json";

export default function CareerForm() {
  const {careerForm} =data
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
      toast.error(careerForm.messages.fileSizeError);
      return;
    }

    if (file.type !== "application/pdf") {
      toast.error(careerForm.messages.fileTypeError);
      return;
    }

    setCvFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!cvFile) {
      toast.error(careerForm.messages.noCvError);
      return;
    }

    if (!captchaVerified) {
      toast.error(careerForm.messages.captchaError);
      return;
    }

    console.log("Form Data:", formData);
    console.log("Uploaded CV:", {
      name: cvFile.name,
      size: cvFile.size,
      type: cvFile.type,
    });

    toast.success(careerForm.messages.success);

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
    <Grid size={{ xs: 12, md: 6 }} minWidth={600} my={[4]} justifySelf="center">
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
          {careerForm.title}
        </Typography>

        <Stack spacing={3}>
          {/* Name & Phone */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label={careerForm.labels.name}
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
                label={careerForm.labels.phone}
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
            label={careerForm.labels.email}
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            InputLabelProps={{ required: false }}
          />

          {/* Profession */}
          <FormControl fullWidth required>
            <InputLabel>{careerForm.labels.profession}</InputLabel>
            <Select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              label={careerForm.labels.profession}
            >
              {careerForm.professions.map((p) => (
                <MenuItem key={p} value={p}>
                  {p}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* CV Upload */}
          <Button variant="outlined" component="label">
            {cvFile ? `Selected: ${cvFile.name}` : careerForm.placeholders.cvUpload}
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
            label={careerForm.labels.coverLetter}
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
            InputLabelProps={{ required: false }}
          />

          {/* CAPTCHA */}
          <ReCAPTCHA
            sitekey={careerForm.captcha.siteKey}
            onChange={() => setCaptchaVerified(true)}
          />

          {/* Submit */}
          <Button
            type="submit"
            variant="contained"
            disabled={!captchaVerified}
            sx={{ py: 1.5 }}
          >
            {careerForm.buttons.submit}
          </Button>
        </Stack>
      </Box>
    </Grid>
  );
}
