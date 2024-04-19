import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProjectCard({project}) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        sx={{ height: 400 }}
        image={project.img}
        title={project.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {project.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
        {project.desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: 'end' }}>
        <Button variant="contained" size="large" color="secondary" fullWidth>Check out</Button>
        <Button variant="contained" size="large" color="success" fullWidth>Code</Button>
      </CardActions>
    </Card>
  );
}