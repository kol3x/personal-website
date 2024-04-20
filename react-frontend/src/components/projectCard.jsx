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
        <Typography fontSize="30px" fontWeight="lg">
          {project.title}
        </Typography>
        <Typography level="body-sm" fontSize={"lg"}>{project.stack}</Typography>
      </div>
      <AspectRatio minHeight="120px" maxHeight="400px">
        <img src={project.img} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography fontSize="lg">{project.desc}</Typography>
        </div>
      </CardContent>
      <CardContent orientation="horizontal">
        {project.title !== "Personal Website" ? (
          <Button
            component="a"
            href={project.appURL}
            target="_blank"
            variant="solid"
            size="md"
            color="primary"
            aria-label={project.name}
            sx={{ ml: "auto", fontWeight: 600, height: 40, alignSelf: "end" }}
            fullWidth
          >
            CHECK OUT
          </Button>
        ) : (
          ""
        )}
        <Button
          component="a"
          href={project.codeURL}
          target="_blank"
          variant="solid"
          size="md"
          color="success"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", fontWeight: 600, height: 40, alignSelf: "end" }}
          fullWidth
        >
          CODE
        </Button>
      </CardContent>
    </Card>
  );
}
