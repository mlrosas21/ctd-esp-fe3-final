import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ComicCard = ({thumbnail, title, description}) => { 
  
  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt={`${title} thumbnail photo`}
        height="250"
        image={`${thumbnail.path}.${thumbnail.extension}`}
        sx={{objectFit: 'contain'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description || "Sin descripción disponible."}
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small" variant='contained'>Comprar</Button>
        <Button size="small">Ver detalle</Button>
      </CardActions>
    </Card>
  )
}

export default ComicCard