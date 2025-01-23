import { useState } from 'react';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box>
      <Typography level="h1" sx={{ mb: 2, textAlign: 'center' }}>
        Contact Us
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4, textAlign: 'center' }}>
        Get in touch with our legal team for a free consultation
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid xs={12} md={4}>
          <Box sx={{ mb: { xs: 4, md: 0 } }}>
            <Card variant="soft" sx={{ p: 3, height: '100%' }}>
              <Typography level="h3" sx={{ mb: 3 }}>
                Contact Information
              </Typography>
              
              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                <PhoneIcon />
                <Box>
                  <Typography level="title-lg">Phone</Typography>
                  <Typography>1-800-555-0123</Typography>
                </Box>
              </Box>

              <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                <EmailIcon />
                <Box>
                  <Typography level="title-lg">Email</Typography>
                  <Typography>contact@sokolovelaw.com</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <LocationOnIcon />
                <Box>
                  <Typography level="title-lg">Office</Typography>
                  <Typography>93 Worcester Street</Typography>
                  <Typography>Wellesley, MA 02481</Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>

        {/* Contact Form */}
        <Grid xs={12} md={8}>
          <Card variant="outlined" sx={{ p: 3 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid xs={12} sm={6}>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid xs={12} sm={6}>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid xs={12}>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid xs={12}>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    minRows={4}
                    value={formData.message}
                    onChange={handleChange}
                    sx={{ mb: 2 }}
                  />
                </Grid>
                <Grid xs={12}>
                  <Button type="submit" size="lg" fullWidth>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>

      {/* Map Section */}
      <Box sx={{ mt: 6 }}>
        <Typography level="h2" sx={{ mb: 3, textAlign: 'center' }}>
          Our Location
        </Typography>
        <Card variant="outlined">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.4764069835493!2d-71.2945492!3d42.2967775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3881e2a5c7e7f%3A0x7f5b7c1c6c8d6b0a!2s93%20Worcester%20St%2C%20Wellesley%2C%20MA%2002481!5e0!3m2!1sen!2sus!4v1629308000000!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Office Location"
          />
        </Card>
      </Box>
    </Box>
  );
};

export default Contact; 