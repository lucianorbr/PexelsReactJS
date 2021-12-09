import React from "react";
import GridList from '@material-ui/core/GridList';
import GridListTitle from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";


const Gallery = (props) => {
    return (
        <div>
            <GridList cellHeight={400} cols={4}>
                {props.photos.map((img) => (
                    <GridListTitle
                        style={{flexGrow: '1'}}
                        cols={(img.width / 1200 / 3)}
                    >
                        <a href={img.src.original} target="_blank" rel="noopener noreferrer">
                            <img width="100%" src={img.src.large} alt={img.photographer}/>
                        </a>

                        <a href={img.photographer_url} target="_blank" rel="noopener noreferrer">
                            <GridListTileBar title={img.photographer} subtitle={<span>{img.photographer_url}</span>}/>
                        </a>
                    </GridListTitle>
                ))}
            </GridList>
        </div>
    );
};

export default Gallery;