'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Chip,
  Divider,
  TextField,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {
  Close,
  Work,
  LocationOn,
  Schedule,
  AttachMoney,
  BusinessCenter,
  Engineering,
  Security,
  NetworkCheck,
  Build,
  TrendingUp,
} from '@mui/icons-material';
import toast, { Toaster } from 'react-hot-toast';
import {
  primaryColor,
  primaryLight,
  secondaryColor,
  secondaryLight,
  secondaryHover,
  offWhiteColor,
  offBlackText,
  offBlackTextLight,
} from '@/components/utils/Colors';

const Jobs = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: '',
  });

  const jobs = [
    {
      id: 1,
      title: 'Security Systems Engineer',
      department: 'Engineering',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      experience: '3-5 years',
      icon: Security,
      color: secondaryColor,
      lightColor: secondaryLight,
      description: 'We are seeking a skilled Security Systems Engineer to design, implement, and maintain comprehensive security and surveillance solutions for our clients.',
      responsibilities: [
        'Design and implement security systems including CCTV, access control, and alarm systems',
        'Conduct site surveys and assessments for security installations',
        'Configure and program security equipment and software',
        'Troubleshoot and resolve technical issues with security systems',
        'Collaborate with project managers and clients to ensure successful deployments',
        'Provide technical training and support to clients and team members',
      ],
      requirements: [
        'Bachelor\'s degree in Electrical Engineering, Computer Science, or related field',
        '3-5 years of experience in security systems design and installation',
        'Strong knowledge of CCTV, access control, and intrusion detection systems',
        'Proficiency in network configuration and IP-based security systems',
        'Excellent problem-solving and communication skills',
        'Valid driver\'s license and ability to travel to client sites',
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance coverage',
        'Professional development opportunities',
        'Flexible working hours',
        'Company vehicle for field work',
      ],
    },
    {
      id: 2,
      title: 'Automation & Access Control Specialist',
      department: 'Technical Services',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      experience: '2-4 years',
      icon: Engineering,
      color: primaryColor,
      lightColor: primaryLight,
      description: 'Join our team as an Automation & Access Control Specialist to work on cutting-edge building automation and access control systems.',
      responsibilities: [
        'Install and configure automated access control systems',
        'Program and integrate building automation systems',
        'Maintain and upgrade existing automation infrastructure',
        'Provide technical support and troubleshooting for automation systems',
        'Work with clients to customize solutions based on their needs',
        'Document system configurations and create user manuals',
      ],
      requirements: [
        'Diploma or Bachelor\'s degree in Electronics, Automation, or related field',
        '2-4 years of experience with access control and building automation systems',
        'Knowledge of protocols like BACnet, Modbus, and KNX',
        'Experience with FAAC, Block Axess, or similar access control systems',
        'Strong technical and analytical skills',
        'Ability to work independently and in a team environment',
      ],
      benefits: [
        'Attractive salary and performance bonuses',
        'Comprehensive health and dental insurance',
        'Training on latest automation technologies',
        'Career advancement opportunities',
        'Modern work environment',
      ],
    },
    {
      id: 3,
      title: 'Network Infrastructure Technician',
      department: 'IT & Networking',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      experience: '2-3 years',
      icon: NetworkCheck,
      color: secondaryColor,
      lightColor: secondaryLight,
      description: 'We are looking for a Network Infrastructure Technician to install, maintain, and troubleshoot network cabling and wireless solutions.',
      responsibilities: [
        'Install and terminate network cables (Cat5e, Cat6, fiber optic)',
        'Configure network switches, routers, and wireless access points',
        'Test and certify network installations',
        'Troubleshoot network connectivity issues',
        'Maintain network documentation and diagrams',
        'Coordinate with other teams for integrated solutions',
      ],
      requirements: [
        'Technical diploma or certification in Network Engineering or related field',
        '2-3 years of hands-on experience with network cabling and infrastructure',
        'Knowledge of network protocols (TCP/IP, VLANs, routing)',
        'Experience with cable management and structured cabling systems',
        'Physical ability to work in various environments (ceilings, crawl spaces)',
        'Strong attention to detail and organizational skills',
      ],
      benefits: [
        'Competitive compensation package',
        'Health and life insurance',
        'Overtime pay opportunities',
        'Tools and equipment provided',
        'Certification support',
      ],
    },
    {
      id: 4,
      title: 'Project Manager - Building Solutions',
      department: 'Project Management',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      experience: '5-7 years',
      icon: Build,
      color: primaryColor,
      lightColor: primaryLight,
      description: 'Lead complex building automation and security projects from conception to completion as our Project Manager.',
      responsibilities: [
        'Plan, execute, and deliver building automation and security projects',
        'Manage project timelines, budgets, and resources',
        'Coordinate with clients, vendors, and internal teams',
        'Prepare project documentation and progress reports',
        'Ensure quality standards and client satisfaction',
        'Identify and mitigate project risks',
      ],
      requirements: [
        'Bachelor\'s degree in Engineering, Project Management, or related field',
        '5-7 years of project management experience in construction or technology',
        'PMP certification preferred',
        'Strong leadership and communication skills',
        'Experience with building automation or security systems',
        'Proficiency in project management software',
        'Excellent problem-solving and decision-making abilities',
      ],
      benefits: [
        'Senior-level salary package',
        'Performance-based bonuses',
        'Comprehensive benefits package',
        'Leadership development programs',
        'Company car and mobile phone',
      ],
    },
    {
      id: 5,
      title: 'Sales Executive - Security Solutions',
      department: 'Sales & Business Development',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      experience: '3-5 years',
      icon: TrendingUp,
      color: secondaryColor,
      lightColor: secondaryLight,
      description: 'Drive business growth by identifying opportunities and selling our comprehensive security and automation solutions.',
      responsibilities: [
        'Identify and pursue new business opportunities',
        'Build and maintain relationships with clients',
        'Prepare and deliver sales presentations and proposals',
        'Negotiate contracts and close deals',
        'Collaborate with technical teams to develop solutions',
        'Meet and exceed sales targets',
      ],
      requirements: [
        'Bachelor\'s degree in Business, Marketing, or related field',
        '3-5 years of B2B sales experience, preferably in security/technology',
        'Strong communication and presentation skills',
        'Proven track record of meeting sales targets',
        'Knowledge of security and automation solutions',
        'Self-motivated and results-oriented',
        'Valid driver\'s license',
      ],
      benefits: [
        'Competitive base salary plus commission',
        'Uncapped earning potential',
        'Health insurance and benefits',
        'Sales training and development',
        'Company car and expense account',
      ],
    },
  ];

  const handleOpenDialog = (job) => {
    setSelectedJob(job);
    setOpenDialog(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: '',
      coverLetter: '',
    });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedJob(null);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    try {
      // Handle form submission here
      console.log('Application submitted:', { job: selectedJob.title, ...formData });
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success('Your application has been submitted successfully! We will contact you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        resume: '',
        coverLetter: '',
      });
      
      // Close dialog after a short delay
      setTimeout(() => {
        handleCloseDialog();
      }, 1500);
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: offWhiteColor,
        py: { xs: 6, md: 10 },
      }}
    >
      <Toaster position="top-right" />
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              fontWeight: 700,
              color: offBlackText,
              mb: 2,
            }}
          >
            Open{' '}
            <Box component="span" sx={{ color: primaryColor }}>
              Positions
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: offBlackTextLight,
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: '700px',
              mx: 'auto',
            }}
          >
            Explore exciting career opportunities and join our growing team
          </Typography>
        </Box>

        {/* Jobs Grid */}
        <Grid container spacing={3}>
          {jobs.map((job) => {
            const IconComponent = job.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={job.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '16px',
                    border: `2px solid ${job.lightColor}`,
                    boxShadow: `0 4px 20px ${job.lightColor}40`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 12px 40px ${job.lightColor}60`,
                      borderColor: job.color,
                    },
                  }}
                  onClick={() => handleOpenDialog(job)}
                >
                  <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Icon and Title */}
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '12px',
                          backgroundColor: `${job.lightColor}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComponent
                          sx={{
                            fontSize: '2rem',
                            color: job.color,
                          }}
                        />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="h5"
                          component="h3"
                          sx={{
                            fontWeight: 700,
                            color: offBlackText,
                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                            mb: 0.5,
                          }}
                        >
                          {job.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: offBlackTextLight,
                            fontSize: '0.9rem',
                          }}
                        >
                          {job.department}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: offBlackTextLight,
                        mb: 2,
                        flexGrow: 1,
                        lineHeight: 1.6,
                      }}
                    >
                      {job.description}
                    </Typography>

                    {/* Job Details */}
                    <Box sx={{ mb: 2 }}>
                      <Stack spacing={1}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LocationOn sx={{ fontSize: '1.2rem', color: job.color }} />
                          <Typography variant="body2" sx={{ color: offBlackTextLight }}>
                            {job.location}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Schedule sx={{ fontSize: '1.2rem', color: job.color }} />
                          <Typography variant="body2" sx={{ color: offBlackTextLight }}>
                            {job.type}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <BusinessCenter sx={{ fontSize: '1.2rem', color: job.color }} />
                          <Typography variant="body2" sx={{ color: offBlackTextLight }}>
                            {job.experience}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>

                    {/* Apply Button */}
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        backgroundColor: job.color,
                        color: offWhiteColor,
                        fontWeight: 600,
                        py: 1.2,
                        borderRadius: '8px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        '&:hover': {
                          backgroundColor: job.color === primaryColor ? primaryColor : secondaryHover,
                          transform: 'scale(1.02)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      View Details & Apply
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Job Details Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            maxHeight: '90vh',
          },
        }}
      >
        {selectedJob && (
          <>
            <DialogTitle
              sx={{
                backgroundColor: `${selectedJob.lightColor}`,
                color: offBlackText,
                pb: 2,
                position: 'relative',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '12px',
                    backgroundColor: offWhiteColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {React.createElement(selectedJob.icon, {
                    sx: { fontSize: '2rem', color: selectedJob.color },
                  })}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 0.5 }}>
                    {selectedJob.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: offBlackTextLight }}>
                    {selectedJob.department}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                <Chip
                  icon={<LocationOn />}
                  label={selectedJob.location}
                  size="small"
                  sx={{ backgroundColor: offWhiteColor }}
                />
                <Chip
                  icon={<Schedule />}
                  label={selectedJob.type}
                  size="small"
                  sx={{ backgroundColor: offWhiteColor }}
                />
                <Chip
                  icon={<BusinessCenter />}
                  label={selectedJob.experience}
                  size="small"
                  sx={{ backgroundColor: offWhiteColor }}
                />
              </Box>
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: offBlackText,
                }}
              >
                <Close />
              </IconButton>
            </DialogTitle>

            <DialogContent dividers sx={{ p: 3 }}>
              <Box component="form" onSubmit={handleSubmitApplication}>
                {/* Job Description */}
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: selectedJob.color }}>
                    Job Description
                  </Typography>
                  <Typography variant="body1" sx={{ color: offBlackTextLight, mb: 3, lineHeight: 1.8 }}>
                    {selectedJob.description}
                  </Typography>

                  {/* Responsibilities */}
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: selectedJob.color }}>
                    Key Responsibilities
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                    {selectedJob.responsibilities.map((responsibility, index) => (
                      <Typography
                        key={index}
                        component="li"
                        variant="body2"
                        sx={{ color: offBlackTextLight, mb: 1, lineHeight: 1.8 }}
                      >
                        {responsibility}
                      </Typography>
                    ))}
                  </Box>

                  {/* Requirements */}
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: selectedJob.color }}>
                    Requirements
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                    {selectedJob.requirements.map((requirement, index) => (
                      <Typography
                        key={index}
                        component="li"
                        variant="body2"
                        sx={{ color: offBlackTextLight, mb: 1, lineHeight: 1.8 }}
                      >
                        {requirement}
                      </Typography>
                    ))}
                  </Box>

                  {/* Benefits */}
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: selectedJob.color }}>
                    What We Offer
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                    {selectedJob.benefits.map((benefit, index) => (
                      <Typography
                        key={index}
                        component="li"
                        variant="body2"
                        sx={{ color: offBlackTextLight, mb: 1, lineHeight: 1.8 }}
                      >
                        {benefit}
                      </Typography>
                    ))}
                  </Box>
                </Box>

                <Divider sx={{ my: 4 }} />

                {/* Application Form */}
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: selectedJob.color }}>
                  Apply for this Position
                </Typography>

                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        '& fieldset': {
                          borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                          borderColor: selectedJob.color,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: selectedJob.color,
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: selectedJob.color,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    type="email"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        '& fieldset': {
                          borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                          borderColor: selectedJob.color,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: selectedJob.color,
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: selectedJob.color,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    type="tel"
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        '& fieldset': {
                          borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                          borderColor: selectedJob.color,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: selectedJob.color,
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: selectedJob.color,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Resume/CV Link or Upload"
                    name="resume"
                    value={formData.resume}
                    onChange={handleFormChange}
                    placeholder="Paste your resume link or describe your experience"
                    required
                    multiline
                    rows={3}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        '& fieldset': {
                          borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                          borderColor: selectedJob.color,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: selectedJob.color,
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: selectedJob.color,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Cover Letter (Optional)"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleFormChange}
                    placeholder="Tell us why you're interested in this position"
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        '& fieldset': {
                          borderColor: '#e0e0e0',
                        },
                        '&:hover fieldset': {
                          borderColor: selectedJob.color,
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: selectedJob.color,
                        },
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: selectedJob.color,
                      },
                    }}
                  />
                </Stack>
              </Box>
            </DialogContent>

            <DialogActions sx={{ p: 3, backgroundColor: offWhiteColor }}>
              <Button
                onClick={handleCloseDialog}
                sx={{
                  color: offBlackTextLight,
                  textTransform: 'none',
                  fontWeight: 500,
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmitApplication}
                variant="contained"
                sx={{
                  backgroundColor: selectedJob.color,
                  color: offWhiteColor,
                  fontWeight: 600,
                  px: 4,
                  py: 1,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: selectedJob.color === primaryColor ? primaryColor : secondaryHover,
                  },
                }}
              >
                Submit Application
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Jobs;

