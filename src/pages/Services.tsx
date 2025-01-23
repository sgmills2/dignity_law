import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Grid from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Services = () => {
  const services = [
    {
      title: 'Nursing Home Abuse Cases',
      description: 'Legal representation for victims of physical, emotional, or financial abuse in nursing homes.',
      items: [
        'Physical abuse investigation',
        'Emotional abuse claims',
        'Financial exploitation cases',
        'Neglect and negligence claims',
      ],
    },
    {
      title: 'Elder Care Rights',
      description: 'Protection and advocacy for the fundamental rights of elderly care facility residents.',
      items: [
        'Quality of care standards',
        'Resident rights advocacy',
        'Facility compliance issues',
        'Care plan enforcement',
      ],
    },
    {
      title: 'Legal Consultation',
      description: 'Expert legal advice and consultation for families dealing with elderly care issues.',
      items: [
        'Free initial consultation',
        'Case evaluation',
        'Legal strategy development',
        'Family advocacy support',
      ],
    },
  ];

  return (
    <Box>
      <Typography level="h1" sx={{ mb: 2 }}>
        Our Legal Services
      </Typography>
      <Typography level="body-lg" sx={{ mb: 4 }}>
        We provide comprehensive legal services focused on protecting elderly residents in care facilities.
      </Typography>

      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid key={index} xs={12} md={4}>
            <Card variant="outlined" sx={{ height: '100%', p: 3 }}>
              <Typography level="h3" sx={{ mb: 2 }}>
                {service.title}
              </Typography>
              <Typography sx={{ mb: 2 }}>
                {service.description}
              </Typography>
              <List>
                {service.items.map((item, itemIndex) => (
                  <ListItem key={itemIndex}>
                    <ListItemDecorator>
                      <CheckCircleIcon color="primary" />
                    </ListItemDecorator>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography level="h2" sx={{ mb: 2 }}>
          Get Professional Legal Support
        </Typography>
        <Typography>
          Our experienced team is ready to help you navigate the complexities of elder care law.
          Contact us today to discuss your case and learn how we can assist you.
        </Typography>
      </Box>
    </Box>
  );
};

export default Services;
