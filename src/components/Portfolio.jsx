import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
} from "grommet";
import { Favorite, ShareOption } from "grommet-icons";

const Portfolio = () => {
  return (
    <Grid
      areas={[
        { name: "main", start: [1, 0], end: [1, 0] },
        { name: "technologies", start: [0, 1], end: [2, 1] },
      ]}
      columns={["xxsmall", "flex", "xxsmall"]}
      rows={["medium", "small"]}
    >
      <Box margin="small" gridArea="main" background="dark-3">
        <Card height="small" width="small" background="light-1">
          <CardHeader pad="medium">Header</CardHeader>
          <CardBody pad="medium">Body</CardBody>
          <CardFooter pad={{ horizontal: "small" }} background="light-2">
            <Button icon={<Favorite color="red" />} hoverIndicator />
            <Button icon={<ShareOption color="plain" />} hoverIndicator />
          </CardFooter>
        </Card>
      </Box>
      <Box margin="small" gridArea="technologies" background="accent-1" />
    </Grid>
  );
};

export default Portfolio;
