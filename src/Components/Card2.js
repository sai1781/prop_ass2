import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Stack } from '@mui/material'
import { Container } from '@mui/system';



const Card2 = ({ data }) => {


    return (
        <>
            <Container sx={{ height: "auto" }}>
                <ImageList sx={{ height: "auto", width: "100", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>

                    {data.map((item,idx) => (
                        <ImageListItem  scroll="hidden" key={item.img} sx={{ marginBottom: 3, marginTop: 2, height: 100, overflow: "hidden", border: "1px solid black", borderRadius: 3, boxShadow: "1px 1px 7px rgba(0,0,0,0.8)" }} >
                            <img
                                src={item.img}
                                srcSet={item.img}
                                alt={item.title}
                                loading="lazy"
                                style={{ height: 420, width: 900, display: "flex" }}

                            />
                            <ImageListItemBar  style={{
                                display: "flex", width: "auto", borderRadius: 1, height: "auto", opacity: 1,
                                
                                background: "linear-gradient(90deg, rgba(0,0,0,1) 60%, rgba(251,251,251,0.1) 71%)",
                            }}
                                position="top"

                                title={
                                    <Card sx={{ width: "55%", overflowX: "auto", overflowY:"auto", scroll: "hidden", backgroundColor:"black", color: "white", height: 390, borderRadius: 1, marginTop: 1, }}>
                                        <CardHeader
                                            avatar={
                                                <CardMedia
                                                    component="img"
                                                    height="194"
                                                    image={item.poster}
                                                    alt="Paella dish"
                                                    sx={{ width: 100, height: 150, border: "1px solid white" }}

                                                />
                                            }
                                            title={
                                                <Stack spacing={1} style={{ display: "flex", height: 150, width: "auto", justifyContent: "flex-start", alignItems: "flex-start" }}>
                                                    <Typography variant='h5' >{item.name}</Typography>
                                                    <Typography style={{color:"rgba(173,216,230,0.8)"}}  >{item.year},{item.actor_name}</Typography>
                                                    <Stack direction="row" spacing={2} >
                                                        <Typography style={{ width:"auto",paddingLeft:2,paddingRight:6, boxShadow: "1px 1px 3px rgba(255,255,255,0.7)", borderRadius: 5 }} >{item.time}</Typography>
                                                        <Typography>Action,crime,fantasy</Typography>
                                                    </Stack>
                                                </Stack>
                                            }
                                        />
                                        
                                        <CardContent  >
                                        <Typography style={{ fontSize:18, whiteSpace:"normal", textAlign:"left" }} >
                                                {item.text}
                                            </Typography>
                                          
                                        </CardContent>
                                        <Stack>
                                            <CardActions style={{ marginTop: 20 }}>
                                                <IconButton aria-label="add to favorites">
                                                    <FavoriteIcon style={{ color: "white" }} />
                                                </IconButton>
                                                <IconButton aria-label="share" >
                                                    <ShareIcon style={{ color: "white" }} />
                                                </IconButton>
                                                <IconButton aria-label="share">
                                                    <ChatBubbleIcon style={{ color: "white" }} />
                                                </IconButton>

                                            </CardActions>
                                        </Stack>
                                    </Card>
                                }
                                subtitle={item.author}

                            />

                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>

        </>
    )

}

export default Card2;