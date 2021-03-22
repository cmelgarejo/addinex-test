import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SaveIcon from '@material-ui/icons/Save';
import WatchIcon from '@material-ui/icons/Watch';
import TimeInterval from '../components/TimeInterval/Container';
import IntervalInput from '../components/TimeIntervalInput/Container';
import EventInput from '../components/EventInput/Container';
import Notice from '../components/Notice/Container';
import EventList from '../components/EventList/Container';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" style={{ textAlign: 'center' }}>
        AddinexTech Events!
      </Typography>
      <EventInput Icon={SaveIcon} Label="Add event" Type="text" DefaultValue="" />
      <IntervalInput Icon={WatchIcon} Label="Interval" Type="number" error="" DefaultValue="" />
      <TimeInterval />
      <Notice />
      <EventList />
    </Container>
  );
}
