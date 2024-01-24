import { Button, Card, CardContent, CardHeader, CardMedia, Checkbox, Container, CssBaseline, Divider, FormControlLabel, FormLabel, Grid, Icon, MenuItem, Paper, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import IcecreamIcon from '@mui/icons-material/Icecream';
import WineBarIcon from '@mui/icons-material/WineBar';
import LunchDiningIcon from '@mui/icons-material/LunchDining';

function App() {

  return (
    <>
      <CssBaseline />
      <Container sx={{backgroundColor: '#EEE', p: '2em 0 2em', minHeight: '100vh', display: 'flex', flexDirection:'column', alignItems: 'center'}}>
        <Paper height={5} sx={{width: '40em', p: '2em', mb: '2em'}}>
          <form>
            <FormLabel>Nimi</FormLabel>
            <TextField sx={{mb: 3}} fullWidth name="title" />

            <Grid container gap={3} wrap="nowrap">
              <Grid item xs={6}>
                <FormLabel>Valmistumisvuosi</FormLabel>
                <TextField sx={{mb: 3}} fullWidth name="year" type="number" />
              </Grid>

              <Grid item xs={6}>
                <FormLabel>Julkaisumaa</FormLabel>
                <Select sx={{mb: 3}} fullWidth name="country" defaultValue={''}>
                  <MenuItem value="" disabled>Valitse maa</MenuItem>
                  <MenuItem value="usa">USA</MenuItem>
                  <MenuItem value="finland">Suomi</MenuItem>
                  <MenuItem value="sweden">Ruotsi</MenuItem>
                  <MenuItem value="uk">Britannia</MenuItem>
                  <MenuItem value="albania">Albania</MenuItem>
                  <MenuItem value="india">Intia</MenuItem>
                </Select>
              </Grid>
            </Grid>

            <FormLabel>Ohjaaja</FormLabel>
            <TextField sx={{mb: 3}} fullWidth name="director" />

            <FormLabel>Käsikirjoittaja</FormLabel>
            <TextField sx={{mb: 3}} fullWidth name="scriptwriter" />

            <FormLabel>Pääosan esittäjä</FormLabel>
            <TextField sx={{mb: 3}} fullWidth name="star" />

            <FormLabel>Julisteen url</FormLabel>
            <TextField sx={{mb: 3}} fullWidth name="posterUrl" />

            <FormLabel>Genret</FormLabel>
            <Select sx={{mb: 3}} fullWidth multiple name="genre" defaultValue={[]}>
              <MenuItem value="" disabled>Valitse genre</MenuItem>
              <MenuItem value="drama">Draama</MenuItem>
              <MenuItem value="comedy">Komedia</MenuItem>
              <MenuItem value="horror">Kauhu</MenuItem>
              <MenuItem value="scifi">Scifi</MenuItem>
              <MenuItem value="thriller">Trilleri</MenuItem>
              <MenuItem value="documetary">Dokumentti</MenuItem>
            </Select>

            <Grid container gap={3} wrap="nowrap">
              <Grid item xs={6}>
                <FormLabel>Leffatyyppi</FormLabel>
                <RadioGroup name="movieType">
                  <FormControlLabel label="Jäätelöleffa" control={<Radio value="iceCream" />} />
                  <FormControlLabel label="Punaviinileffa" control={<Radio value="redWine" />} />
                  <FormControlLabel label="Hampurilaisleffa" control={<Radio value="hamburger" />} />
                </RadioGroup>
              </Grid>

              <Grid item xs={6}>
                <FormControlLabel label="Katsottu" control={<Checkbox name="watched" />} />
              </Grid>
            </Grid>

            <Button sx={{mt: '2em'}} variant="outlined" size="large">Lähetä</Button>

          </form>
        </Paper>

        <Card variant="outlined" sx={{ minWidth: '20em'}}>
          <CardHeader title="Leffan nimi" subheader="maa, vuosi" action={<CheckCircleOutlineIcon fontSize="large" color="disabled" />} />
          <CardMedia height="400" component="img" image="http://picsum.photos/300/400.jpg" />
          <CardContent>
            <IcecreamIcon fontSize="large" sx={{display: 'block'}} color="primary" />
            <Divider sx={{m: '1em 0'}} />
            <Typography variant='caption'>Ohjaaja</Typography>
            <Typography variant='body1'>Ohjaajan nimi</Typography>
            <Typography variant='caption'>Käsikirjoittaja:</Typography>
            <Typography variant='body1'>Käsikirjoittajan nimi</Typography>
            <Typography variant='caption'>Pääosa:</Typography>
            <Typography variant='body1'>Näyttelijän nimi</Typography>
            <Typography variant='caption'>Genret:</Typography>
            <Typography variant='body1'>Genrelista</Typography>
            <Typography variant='caption'>Leffatyyppi:</Typography>
            <Typography variant='body1'>Genrelista</Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default App
