import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import AspectRatio from '@mui/joy/AspectRatio';
import Stack from '@mui/joy/Stack';
import Divider from '@mui/joy/Divider';

const About = () => {
  const teamMembers = [
    {
      name: 'Billy Joe Mills',
      role: 'Founding Partner',
      description: 'Dedicated advocate for nursing home residents with over 15 years of experience in elder abuse litigation.',
      image: 'https://placehold.co/400x500',
    },
    {
      name: 'Micah Heartson',
      role: 'Founding Partner',
      description: 'Specializes in nursing home negligence cases and elder rights protection, with a focus on facility compliance.',
      image: 'https://placehold.co/400x500',
    },
  ];

  return (
    <Box>
      {/* Mission Section */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography level="h1" sx={{ mb: 2 }}>
          About Dignity Nursing Home Law
        </Typography>
        <Typography level="body-lg" sx={{ maxWidth: '800px', mx: 'auto' }}>
          For over three decades, we've been dedicated to protecting the rights and dignity of elderly care residents.
          Our mission is to ensure that every individual receives the care and respect they deserve.
        </Typography>
      </Box>

      {/* Values Section */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid xs={12} md={4}>
          <Card variant="soft" sx={{ height: '100%', p: 3 }}>
            <Typography level="h3" sx={{ mb: 2 }}>
              Our Vision
            </Typography>
            <Typography>
              To be the leading advocate for elderly care rights, ensuring dignity and justice for all residents
              in care facilities across the nation.
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card variant="soft" sx={{ height: '100%', p: 3 }}>
            <Typography level="h3" sx={{ mb: 2 }}>
              Our Values
            </Typography>
            <Typography>
              Integrity, compassion, and dedication guide everything we do. We believe in fighting for justice
              while treating every client with the respect they deserve.
            </Typography>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card variant="soft" sx={{ height: '100%', p: 3 }}>
            <Typography level="h3" sx={{ mb: 2 }}>
              Our Commitment
            </Typography>
            <Typography>
              We are committed to providing exceptional legal representation while maintaining the highest
              standards of professional ethics and client care.
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* Team Section */}
      <Box sx={{ mb: 6 }}>
        <Typography level="h2" sx={{ mb: 4, textAlign: 'center' }}>
          Our Legal Team
        </Typography>
        <Grid container spacing={3}>
          {teamMembers.map((member, index) => (
            <Grid key={index} xs={12} md={4}>
              <Card variant="outlined">
                <AspectRatio ratio="1" sx={{ mb: 2 }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{ objectFit: 'cover' }}
                  />
                </AspectRatio>
                <Box sx={{ p: 2 }}>
                  <Typography level="h4">{member.name}</Typography>
                  <Typography level="body-sm" sx={{ mb: 1, color: 'primary.500' }}>
                    {member.role}
                  </Typography>
                  <Typography>
                    {member.description}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Experience Section */}
      <Stack
        direction="row"
        spacing={4}
        divider={<Divider orientation="vertical" />}
        sx={{ justifyContent: 'center', mb: 4 }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography level="h2">30+</Typography>
          <Typography>Years Experience</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography level="h2">1000+</Typography>
          <Typography>Cases Won</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography level="h2">24/7</Typography>
          <Typography>Client Support</Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
