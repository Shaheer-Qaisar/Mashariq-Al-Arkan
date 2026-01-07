'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import {
  Email,
  LocationOn,
  Phone,
  Facebook,
  LinkedIn,
  Instagram
} from '@mui/icons-material';
import toast, { Toaster } from 'react-hot-toast';

import {
  primaryColor,
  secondaryColor,
  secondaryHover,
  secondaryLight,
  offWhiteColor,
  offBlackText,
  offBlackTextLight
} from '@/components/utils/Colors';

import formDataJson from './ContactData.json';

const iconMap = { Email, LocationOn, Phone, Facebook, LinkedIn, Instagram };

const colorMap = { primaryColor, secondaryColor, secondaryLight, secondaryHover, offWhiteColor,  offBlackText, offBlackTextLight };

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleCaptchaChange = (value) => setCaptchaVerified(!!value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form submitted:', formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Your response has been submitted, we will contact you shortly.');
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (err) {
      toast.error('Something went wrong while submitting the response. Please try again later.');
    }
  };

  const { heading, contactInfo, socialLinks, services, form } = formDataJson.contactForm;

  return (
    <Box sx={{ backgroundColor: offWhiteColor, py: { xs: 6, md: 10 }, minHeight: '80vh' }}>
      <Toaster position="top-right" />
      <Container>
        <Grid container spacing={6} alignItems="flex-start">
          {/* Left Side - Contact Info */}
          <Grid size={[12, 12, 6]} data-aos="zoom-in">
            <Box>
              <Typography variant="h1" component="h1" sx={{ fontSize: heading.fontSize, fontWeight: heading.fontWeight, lineHeight: heading.lineHeight, mb: heading.marginBottom }}>
                {heading.lines.map((line, idx) => (
                  <Box key={idx} component="span" sx={{ color: colorMap[line.color], display: 'block' }}>
                    {line.text}
                  </Box>
                ))}
              </Typography>

              <Stack spacing={2} sx={{ mb: 1 }}>
                {contactInfo.map((info, idx) => {
                  const IconComponent = iconMap[info.icon];
                  return (
                    <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 1 }}>
                      <Box sx={{ width: 50, height: 50, borderRadius: '12px', backgroundColor: secondaryLight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <IconComponent sx={{ color: secondaryColor, fontSize: '1.8rem' }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ color: offBlackText, fontWeight: 600, fontSize: '1.3rem' }}>{info.title}</Typography>
                        <Typography component="a" href={info.link} sx={{ color: secondaryColor, fontSize: '1rem', fontWeight: 500, textDecoration: 'none', "&:hover": { color: secondaryHover, textDecoration: 'underline' } }}>
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Stack>

              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((social, idx) => {
                  const IconComponent = iconMap[social.icon];
                  return (
                    <IconButton key={idx} component="a" href={social.url} target="_blank" rel="noopener noreferrer"
                      sx={{ width: 50, height: 50, backgroundColor: secondaryLight, color: secondaryColor, "&:hover": { backgroundColor: secondaryColor, color: offWhiteColor, transform: 'translateY(-3px)' }, transition: 'all 0.3s ease' }}>
                      <IconComponent />
                    </IconButton>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Form */}
          <Grid size={{ xs: 12, md: 6 }} data-aos="zoom-in">
            <Box component="form" onSubmit={handleSubmit} sx={{ backgroundColor: offWhiteColor, p: { xs: 3, md: 4 }, borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <Typography variant="h5" sx={{ color: offBlackText, fontWeight: 600, mb: 3, fontSize: { xs: '1.5rem', md: '1.8rem' } }}>{form.heading}</Typography>

              <Stack spacing={3}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth label="Name" name="name" value={formData.name} onChange={handleChange} required sx={{ "& .MuiOutlinedInput-root": { borderRadius: '8px', "& fieldset": { borderColor: '#e0e0e0' }, "&:hover fieldset": { borderColor: secondaryColor }, "&.Mui-focused fieldset": { borderColor: secondaryColor } }, "& .MuiInputLabel-root.Mui-focused": { color: secondaryColor } }} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth type="tel" label="Phone number" name="phone" value={formData.phone} onChange={handleChange} required sx={{ "& .MuiOutlinedInput-root": { borderRadius: '8px', "& fieldset": { borderColor: '#e0e0e0' }, "&:hover fieldset": { borderColor: secondaryColor }, "&.Mui-focused fieldset": { borderColor: secondaryColor } }, "& .MuiInputLabel-root.Mui-focused": { color: secondaryColor } }} />
                  </Grid>
                </Grid>

                <TextField fullWidth type="email" label="Email" name="email" value={formData.email} onChange={handleChange} required sx={{ "& .MuiOutlinedInput-root": { borderRadius: '8px', "& fieldset": { borderColor: '#e0e0e0' }, "&:hover fieldset": { borderColor: secondaryColor }, "&.Mui-focused fieldset": { borderColor: secondaryColor } }, "& .MuiInputLabel-root.Mui-focused": { color: secondaryColor } }} />

                <FormControl fullWidth required sx={{ "& .MuiOutlinedInput-root": { borderRadius: '8px', "& fieldset": { borderColor: '#e0e0e0' }, "&:hover fieldset": { borderColor: secondaryColor }, "&.Mui-focused fieldset": { borderColor: secondaryColor } }, "& .MuiInputLabel-root.Mui-focused": { color: secondaryColor } }}>
                  <InputLabel>Services</InputLabel>
                  <Select name="service" value={formData.service} onChange={handleChange} label="Services">
                    {services.map((service) => <MenuItem key={service} value={service}>{service}</MenuItem>)}
                  </Select>
                </FormControl>

                <TextField fullWidth multiline rows={6} label="Message" name="message" value={formData.message} onChange={handleChange} required sx={{ "& .MuiOutlinedInput-root": { borderRadius: '8px', "& fieldset": { borderColor: '#e0e0e0' }, "&:hover fieldset": { borderColor: secondaryColor }, "&.Mui-focused fieldset": { borderColor: secondaryColor } }, "& .MuiInputLabel-root.Mui-focused": { color: secondaryColor } }} />

                <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, alignSelf: { xs: 'center', sm: 'flex-start' }, maxWidth: [280, 350] }}>
                  <ReCAPTCHA sitekey={form.captchaSiteKey} onChange={handleCaptchaChange} />
                </Box>

                <Button type="submit" variant="contained" fullWidth disabled={!captchaVerified} sx={{ backgroundColor: secondaryColor, color: offWhiteColor, fontWeight: 600, fontSize: '1rem', py: 1.5, borderRadius: '8px', textTransform: 'none', boxShadow: `0 4px 15px ${secondaryLight}`, "&:hover": { backgroundColor: secondaryHover, boxShadow: `0 6px 20px ${secondaryLight}`, transform: 'translateY(-2px)' }, transition: 'all 0.3s ease' }}>
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
