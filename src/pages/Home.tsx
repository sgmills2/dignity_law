import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import { Link } from 'react-router-dom';
import ElderlyIcon from '@mui/icons-material/Elderly';
import GavelIcon from '@mui/icons-material/Gavel';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Avatar from '@mui/joy/Avatar';
import heroImage from '../assets/heroimg.jpg';

const Home = () => {
  const testimonials = [
    {
      name: "Mary Johnson",
      role: "Family Member",
      content: "Dignity Law helped us through a difficult time when we discovered negligence at my mother's nursing home. Their compassionate approach and legal expertise made all the difference.",
      image: "https://placehold.co/100x100",
    },
    {
      name: "Robert Williams",
      role: "Client",
      content: "I cannot thank the team at Dignity Law enough for their dedication to my case. They fought for my rights and ensured I received the care and compensation I deserved.",
      image: "https://placehold.co/100x100",
    },
    {
      name: "Patricia Davis",
      role: "Family Member",
      content: "The attorneys at Dignity Law were always available to answer our questions and guide us through the legal process. They truly care about their clients' well-being.",
      image: "https://placehold.co/100x100",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          height: '80vh',
          position: 'relative',
          width: '100vw',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          mb: 4,
        }}
      >
        <img
          src={heroImage}
          alt="Elderly couple by the lake"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            px: 2,
          }}
        >
          <Typography
            level="h1"
            sx={{
              mb: 2,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontSize: { xs: '2rem', md: '3.5rem' },
              textAlign: 'center',
              maxWidth: '1200px',
            }}
          >
            Protecting the Rights of Elderly Care Residents
          </Typography>
          <Typography
            level="body-lg"
            sx={{
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              color: 'white',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              textAlign: 'center',
            }}
          >
            We are dedicated to ensuring the dignity, safety, and well-being of your loved ones in elderly care facilities.
            Our experienced legal team is here to help when standards of care aren't met.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            size="lg"
            variant="solid"
            sx={{
              bgcolor: 'white',
              color: 'primary.600',
              '&:hover': {
                bgcolor: 'grey.100',
              },
              boxShadow: 'md',
            }}
          >
            Get Free Consultation
          </Button>
        </Box>
      </Box>

      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        {/* Features Section */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid xs={12} md={4}>
            <Card variant="outlined" sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <ElderlyIcon sx={{ fontSize: 40, mb: 2, color: 'primary.500' }} />
              <Typography level="h4" sx={{ mb: 2 }}>
                Elder Care Advocacy
              </Typography>
              <Typography>
                We advocate for proper care, dignity, and respect for elderly residents in care facilities.
              </Typography>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card variant="outlined" sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <GavelIcon sx={{ fontSize: 40, mb: 2, color: 'primary.500' }} />
              <Typography level="h4" sx={{ mb: 2 }}>
                Legal Expertise
              </Typography>
              <Typography>
                Our experienced attorneys specialize in elder law and nursing home abuse cases.
              </Typography>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card variant="outlined" sx={{ height: '100%', textAlign: 'center', p: 3 }}>
              <SupportAgentIcon sx={{ fontSize: 40, mb: 2, color: 'primary.500' }} />
              <Typography level="h4" sx={{ mb: 2 }}>
                24/7 Support
              </Typography>
              <Typography>
                We're always available to help you and your family through difficult situations.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Testimonials Section */}
        <Box sx={{ mb: 6 }}>
          <Typography level="h2" sx={{ textAlign: 'center', mb: 4 }}>
            Client Testimonials
          </Typography>
          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid key={index} xs={12} md={4}>
                <Card
                  variant="soft"
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 3,
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      fontSize: 40,
                      color: 'primary.300',
                      mb: 2,
                    }}
                  />
                  <Typography sx={{ mb: 3, flex: 1 }}>
                    "{testimonial.content}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={testimonial.image} />
                    <Box>
                      <Typography level="title-md">
                        {testimonial.name}
                      </Typography>
                      <Typography level="body-sm">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            bgcolor: 'background.level1',
            borderRadius: 'lg',
          }}
        >
          <Typography level="h2" sx={{ mb: 2 }}>
            Need Legal Assistance?
          </Typography>
          <Typography sx={{ mb: 3 }}>
            Contact us today for a free consultation about your case.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            size="lg"
            variant="solid"
            color="primary"
          >
            Contact Us Now
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Home;
