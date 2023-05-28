import { Box, Grid } from "grommet";

const Portfolio = () => {
  return (
    <Grid
      areas={[
        { name: "nav", start: [0, 0], end: [0, 0] },
        { name: "main", start: [1, 0], end: [1, 0] },
        { name: "side", start: [2, 0], end: [2, 0] },
        { name: "technologies", start: [0, 1], end: [2, 1] },
      ]}
      columns={["flex", "flex", "flex"]}
      rows={["medium", "small"]}
      gap="small"
    >
      <Box gridArea="nav" background="brand" />
      <Box gridArea="main" background="brand" />
      <Box gridArea="side" background="brand" />
      <Box gridArea="technologies" background="accent-1" />
    </Grid>
  );
};

export default Portfolio;
