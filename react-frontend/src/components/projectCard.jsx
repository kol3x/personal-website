import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export default function ProjectCard({ project }) {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <div>
        <Typography fontSize="lg" fontWeight="lg">
          {project.title}
        </Typography>
        <Typography level="body-sm">React, Express, MongoDB</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="400px">
        <img src={project.img} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography fontSize="sm">{project.desc}</Typography>
        </div>
      </CardContent>
      <CardContent orientation="horizontal">
        <Button
          variant="solid"
          size="lg  "
          color="primary"
          aria-label={project.name}
          sx={{ ml: "auto", fontWeight: 600 }}
          fullWidth
        >
          CHECK OUT
        </Button>
        <Button
          variant="solid"
          size="lg"
          color="success"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", fontWeight: 600 }}
          fullWidth
        >
          CODE
        </Button>
      </CardContent>
    </Card>
  );
}
