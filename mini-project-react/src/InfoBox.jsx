import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){

    const Rainy_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8="
    const Cold_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const Hot_URL="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?s=1024x1024&w=is&k=20&c=FaZwWyck7yOcZQGFIFUsChGv532Wh8eN9nrk5tMyCkg="

    return(
        <div className="InfoBox">
            <div className='InfoCard'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image={info.humidity>80?Rainy_URL:info.temp>15?Hot_URL:Cold_URL}
            title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}{info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon />}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
            <div>Temperature : {info.temp}&deg;C</div> 
            <div>Humidity : {info.humidity}</div>
            <div>MinTemperature : {info.tempMin}&deg;C</div>
            <div>MaxTemperature : {info.tempMax}&deg;C</div>
            <p>The Weather can be described as <b>{info.Weather}</b> and feels like <b>{info.feelsLike}&deg;C</b></p>
            </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}