import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85vw',
    maxHeight: '75vh',
    overflow:'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function Overview(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
        <Button variant="contained" className='overviewBtn' onClick={handleOpen}>Vue d'ensemble</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Carousel
                infiniteLoop
                autoPlay
                useKeyboardArrows
                showArrows={true}
                interval={2000}
                showIndicators={false}
                transitionTime={1000}
                showStatus={false}
                showThumbs={false}
            >
                {
                    props.projectOverview.map((project,ind)=>{
                        return(
                            <img 
                                key={ind} 
                                alt={props.projectName + ' overview'} 
                                className="pjtImgCarousel" 
                                src={project} 
                            />
                    )})
                }
            </Carousel>
            </Box>
        </Modal>
        </>
    )
}

export default Overview;