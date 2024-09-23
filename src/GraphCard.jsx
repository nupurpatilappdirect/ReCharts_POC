import { Container, Text } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

const GraphCard = ({title}) => {
  return (
    <Container>
     <div id="titlecard">
      <Text>{title}</Text>
      <IconSettings></IconSettings>
     </div>
   </Container>
  )
}

export default GraphCard;
