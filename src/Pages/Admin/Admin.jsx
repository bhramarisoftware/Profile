import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, ListItem, Paper, Typography } from "@mui/material";
import * as React from 'react';
import modi from "../../images/modi.png"
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import skill from "../../images/Frame.svg"
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from "react-router-dom";
import "./Admin.css"
import p1 from ".././../images/image 31.png"
import p2 from ".././../images/image 30.png"
import p3 from ".././../images/image 29.png"
import p4 from ".././../images/group.png"
import news1 from "../../images/Kohli.jpg"
import news2 from "../../images/abd.jpeg"
import news3 from "../../images/police.jpeg"
import { Link } from "react-scroll";
import AboutMEEdit from "../../aboutmeedit/AboutMeEdit";
import AddAchivement from "../../AddAchivement/AddAchivement";
import Navbar from "../Navbar";



const cardlist=[
  {
    img:news1,
    details:"Kohli's hiatus from cricket, prompted by personal reasons including the birth of his second child, stirred uncertainties regarding his IPL participation. " ,
    profilephoto:p1,
    accountname:'wings',
    timing:'19m'

  },
  {
    img:news2,
    details:"He Wants Me To Come - ABD Contradicts Gavaskar To Confirm Kohli's IPL Participation",
    profilephoto:p1,
    accountname:'phantom',
    timing:'21m'

  },
  {
    img:news3,
    details:'The very next day of the incident DGP Javed Ahmed in a press conference announced, "All culprits will be booked within 72 hours".',
    profilephoto:p1,
    accountname:'zgod',
    timing:'2h'

  },
  {
    img:news1,
    details:"Kohli's hiatus from cricket, prompted by personal reasons including the birth of his second child, stirred uncertainties regarding his IPL participation. " ,
    profilephoto:p1,
    accountname:'wings',
    timing:'19m'

  },
  {
    img:news2,
    details:"He Wants Me To Come - ABD Contradicts Gavaskar To Confirm Kohli's IPL Participation",
    profilephoto:p1,
    accountname:'phantom',
    timing:'21m'

  },
  {
    img:news3,
    details:'The very next day of the incident DGP Javed Ahmed in a press conference announced, "All culprits will be booked within 72 hours".',
    profilephoto:p1,
    accountname:'zgod',
    timing:'2h'

  },
  {
    img:news1,
    details:"Kohli's hiatus from cricket, prompted by personal reasons including the birth of his second child, stirred uncertainties regarding his IPL participation. " ,
    profilephoto:p1,
    accountname:'wings',
    timing:'19m'

  },
  {
    img:news2,
    details:"He Wants Me To Come - ABD Contradicts Gavaskar To Confirm Kohli's IPL Participation",
    profilephoto:p1,
    accountname:'phantom',
    timing:'21m'

  },
  {
    img:news3,
    details:'The very next day of the incident DGP Javed Ahmed in a press conference announced, "All culprits will be booked within 72 hours".',
    profilephoto:p1,
    accountname:'zgod',
    timing:'2h'

  },
  {
    img:news1,
    details:"Kohli's hiatus from cricket, prompted by personal reasons including the birth of his second child, stirred uncertainties regarding his IPL participation. " ,
    profilephoto:p1,
    accountname:'wings',
    timing:'19m'

  },
  {
    img:news2,
    details:"He Wants Me To Come - ABD Contradicts Gavaskar To Confirm Kohli's IPL Participation",
    profilephoto:p1,
    accountname:'phantom',
    timing:'21m'

  },
  {
    img:news3,
    details:'The very next day of the incident DGP Javed Ahmed in a press conference announced, "All culprits will be booked within 72 hours".',
    profilephoto:p1,
    accountname:'zgod',
    timing:'2h'

  }


]


function Admin() {
  const [AboutEdit,setAboutEdit]=React.useState(false)

const handelAboutEdit=()=>{
  setAboutEdit(true)
  // console.log(LoginOpen,'aa');
  
}
const [Achivement,setAchivement]=React.useState(false)

const handelAchivement=()=>{
  setAchivement(true)
  // console.log(LoginOpen,'aa');
  
}

  return (
    <> <Navbar nav={"/preview"}></Navbar>
    {   AboutEdit? <div id="cardouter" style={{ backgroundColor: '#0606063b',zIndex:2, height: '100vh', width: '100%', position: 'fixed', top: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => {
          if (e.target.id == 'cardouter') {
            setAboutEdit(!AboutEdit)
          }
        }} ><AboutMEEdit></AboutMEEdit></div>:''
}
{   Achivement? <div id="cardouter" style={{ backgroundColor: '#0606063b',zIndex:2, height: '100vh', width: '100%', position: 'fixed', top: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={(e) => {
          if (e.target.id == 'cardouter') {
            setAchivement(!Achivement)
          }
        }} ><AddAchivement></AddAchivement></div>:''
}

      <Grid sx={{ flexGrow: 1, padding: '40px 62px 29px 62px',marginBottom:'200px' }} container spacing={2} >
        <Grid item xs={12} paddingBottom={'14px'} id='Quick Profile'>
          <Grid container justifyContent="center" spacing={2}>

            <Grid item width={"802px"} height={"250px"} sx={{
              backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', boxShadow: "0px 6px 12px 0px #0000001A"
            }} >
              <div className="photo">
                <img style={{ borderRadius: '100%', width: '200px', height: "200px" }} src={modi} alt="modi" />
              </div>
              <div className="content_admin" style={{ width: '520px' }} >
                <div className="contenttop" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '22px' }}>
                  <div>
                    <div style={{ marginBottom: '0', marginTop: '-5px', fontSize: '24px', fontWeight: '600' }}>Narendra Modi</div>
                    <span style={{ fontSize: "14px", fontWeight: '400', color: '#626780' }}>Indian prime minister</span>
                  </div>
                  <div style={{ paddingRight: '30px' }}><span style={{ fontSize: "14px", fontWeight: '400', color: '#626780' }}>Profile last updated</span><span style={{ fontSize: "14px", fontWeight: '600', color: 'black' }}>- 20/000/0000</span></div>

                </div>
                <Divider ></Divider>
                <div className="contentbottom" style={{ marginTop: '22px', display: 'flex', alignItems: 'center' }}>
                  <div className="bottomleft" style={{ width: '250px' }} >
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <LocationOnOutlinedIcon fontSize="small" color="#2F80ED" sx={{ padding: '0 10px 0 0', margin: '0', color: '#2F80ED' }} />

                      <ListItemText
                        primary="Bangalore"
                      // secondary= {'Secondary text' }
                      /></div>

                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>

                      <CalendarMonthOutlinedIcon fontSize="small" color="#2F80ED" sx={{ padding: '0 10px 0 0', margin: '0', color: '#2F80ED' }} />
                      <ListItemText
                        primary="10 years"
                      // secondary={ 'Secondary text'}
                      /></div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <AccountBalanceWalletOutlinedIcon fontSize="small" color="#2F80ED" sx={{ padding: '0 10px 0 0', margin: '0', color: '#2F80ED' }} />
                      <ListItemText
                        primary="10,00,000"
                      // secondary={ 'Sec</ondary text'}
                      /></div>

                  </div>
                  <Divider orientation="vertical" variant="middle" flexItem sx={{ margin: '0px 22px' }} />

                  <div className="bottomright"  >
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <CallIcon fontSize="small" color="#2F80ED" sx={{ padding: '0 10px 0 0', margin: '0', color: '#2F80ED' }} />
                      <ListItemText
                        primary="9000000000"
                      /> </div> <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <MailOutlineRoundedIcon fontSize="small" color="#2F80ED" sx={{ padding: '0 10px 0 0', margin: '0', color: '#2F80ED' }} />
                      <ListItemText
                        primary="text@text"
                      /> </div> <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                      <CalendarMonthOutlinedIcon fontSize="small" color="#2F80ED" sx={{ padding: '0 10px 0 0', margin: '0', color: '#2F80ED' }} />

                      <ListItemText
                        primary="Join in 2 months"
                      /></div>

                  </div>
                </div>
              </div>
            </Grid>

            <Grid item width={"490px"} height={"250px"} sx={{
              backgroundColor: '#FFFFFF', marginLeft: '30px', padding: '26px 20px 26px 20px', borderRadius: '20px', boxShadow: "0px 6px 12px 0px #0000001A"
            }} >  <div className="right1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '16px', fontWeight: '600' }}>News</div>
                <div><Button variant="contained" style={{ textTransform: 'none' }} sx={{ borderRadius: '50px', height: '36px', fontSize: '16px' }}>Find more news</Button></div>
              </div>
              <div className="right2">
                <div style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: '22px',
                  textAlign: 'left', color: '#BDBDBD'

                }}>2 min read 01 Dec 2023, 04:22 PM IST</div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '22px',
                  textAlign: 'left',
                  padding: '10px 0'

                }}>ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ ದುರ್ಬಳಕೆ - 245 ನಕಲಿ ರೈತರಿಂದ 54.48 ಲಕ್ಷ ರೂಪಾಯಿ ಹಿಂಪಡೆಯಲು ಕ್ರಮ</div>
              </div>
              <Divider style={{ margin: '10px 0' }}></Divider>
              <div className="right3">
                <div style={{
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: '22px',
                  textAlign: 'left', color: '#BDBDBD'

                }}>2 min read 01 Dec 2023, 04:22 PM IST</div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '22px',
                  textAlign: 'left',
                  padding: '10px 0'

                }}>ದುಬೈನಲ್ಲಿ 'ಪ್ರಧಾನಿ ಮೋದಿ', ಇಟಲಿ ಪ್ರಧಾನಿ 'ಮೆಲೋನಿ' ಒಟ್ಟಿಗಿರುವ ಫೋಟೋ ಮತ್ತೆ ವೈರಲ್, ನೆಟ್ಟಿಗರಿಂದ ತಮಾಷೆ ಕಾಮೆಂಟ್</div>
              </div>

            </Grid>

          </Grid>


        </Grid>

        <Grid container justifyContent={"center"} paddingTop={"15px"} >
          <Grid item width={'290px'}   >
            <div style={{
              position: 'sticky', top: '0', height: '500px',
              backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', borderRadius: '20px', display: 'flex', justifyContent: 'space-evenly', boxShadow: "0px 6px 12px 0px #0000001A"
            }} >

              <Grid item xs={12} >
                <Typography variant="h6" fontSize={'20px'} fontWeight={600} component="span">
                 Quick links
              </Typography>

                <ListItem sx={{ padding: '10px 0px' }} >
                  <ListItemAvatar >
                    <PersonIcon />
                  </ListItemAvatar>
                  <Link spy={true} to="Quick Profile"smooth={true} activeClass="activeClass" style={{width:'100%'}}> 
 <span className="Quicklinks">
                    Quick Profile
                    </span>     </Link>             </ListItem>
                <ListItem sx={{ padding: '10px 0px' }}>

                  <ListItemAvatar>
                    <InfoIcon />
                  </ListItemAvatar>
                  <Link spy={true} to="About me"smooth={true}> 
  <span className="Quicklinks">About me</span> </Link>
                </ListItem>
                <ListItem sx={{ padding: '10px 0px' }}>

                  <ListItemAvatar>
                    <WorkIcon />
                  </ListItemAvatar>
                  
                  <Link spy={true} to="Employment"smooth={true}> 
 <span className="Quicklinks">Employment</span></Link>
                </ListItem>
                <ListItem sx={{ padding: '10px 0px' }}>

                  <ListItemAvatar>
                    <SchoolIcon />
                  </ListItemAvatar>
                 
                  <Link spy={true} to="Achievements"smooth={true}> 
                   <span className="Quicklinks">Education</span></Link>

                </ListItem>
                <ListItem sx={{ padding: '10px 0px' }}>

                  <ListItemAvatar>
                    <EmojiEventsIcon />
                  </ListItemAvatar>
                  <Link spy={true} to="Achievements"smooth={true}> 
  <span className="Quicklinks">Achievements</span></Link>

                </ListItem>
                <ListItem sx={{ padding: '10px 0px' }}>

                  <ListItemAvatar>
                    <img src={skill} alt="" />
                  </ListItemAvatar>
                  <Link spy={true} to="Skills & Languages"smooth={true}> 
   <span className="Quicklinks">Skills & Languages</span></Link>

                </ListItem>
                <ListItem sx={{ padding: '10px 0px' }}>

                  <ListItemAvatar>
                    <NewspaperIcon />
                  </ListItemAvatar>
                  <Link spy={true} to="News"smooth={true}> 
  <span className="Quicklinks">News</span></Link>

                </ListItem>

              </Grid>
            </div>
          </Grid>

          <Grid item width={"1011px"}  >
   {/* first */}
            <div id="About me" style={{backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', margin: '0 0px 30px 30px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', boxShadow: "0px 6px 12px 0px #0000001A",flexDirection:'column'
            }} >
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%',marginBottom:'22px'}} ><span>About me</span><Button onClick={handelAboutEdit}  variant="outlined" sx={{borderRadius:'50px',display:'flex',alignItems:'center', textTransform: 'none' }}>Edit <EditIcon sx={{paddingLeft:'5px'}} fontSize="small"/></Button></div>
              <div>
                <span>What is Lorem Ipsum?</span>
                <p style={{marginTop:'0px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
              <div>
                <span>Why do we use it?</span>
                <p style={{marginTop:'0px'}}>Why do we use it?  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)...<span><a href="#">Read more</a></span></p>
              </div>


            </div>


{/* second */}
            <div id={"Employment"} style={{backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', margin: '0 0px 30px 30px', borderRadius: '20px', display: 'flex', boxShadow: "0px 6px 12px 0px #0000001A",flexDirection:'column'
            }} >
                       <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} ><h4 style={{marginBottom:'10px'}}>  Job Details</h4><Button  variant="outlined" sx={{borderRadius:'50px',display:'flex',alignItems:'center', textTransform: 'none' }}>Edit <EditIcon sx={{paddingLeft:'5px'}} fontSize="small"/></Button></div>

         <div style={{display:'flex',alignItems:'flex-start'}}>
         <div  style={{marginRight:'20px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginTop:'20px'}} >
               <div style={{width:'26px',height:'26px',borderRadius:'100%',backgroundColor:'#56CCF2'}} > </div>
                      <div style={{width:'2.5px',height:'235px',backgroundColor:'#56CCF2'}}></div>
                      <div style={{width:'26px',height:'26px',borderRadius:'100%',backgroundColor:'#9B51E0'}} > </div>
                      <div style={{width:'2.5px',height:'235px',backgroundColor:'#9B51E0'}}></div>



                 </div>
              <div>
              <div style={{margin:'18px 0',fontSize:'16px',fontWeight:'700'}}>Your job title <span><EditIcon sx={{paddingLeft:'5px',color:'#BDBDBD'}} fontSize="small"/></span></div>
              <div>
                <div style={{fontSize:'15px',fontWeight:'500',marginBottom:'18px'}}>Company name   |   2012-2014</div>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                   It has survived not only five centuries,</span>
                   <ul style={{margin:'0'}}><li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                     <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                    </ul>            
               </div>
               <div style={{margin:'18px 0',fontSize:'16px',fontWeight:'700'}}>Your job title <span><EditIcon sx={{paddingLeft:'5px',color:'#BDBDBD'}} fontSize="small"/></span></div>
              <div>
                <div style={{fontSize:'15px',fontWeight:'500',marginBottom:'18px'}}>Company name   |   2012-2014</div>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</span>
                   <ul style={{margin:'0'}}><li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                     <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                    </ul>            
               </div>

              
              </div>
         </div>
         


            </div>

{/* third */}

            <div id={"Achievements"} style={{backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', margin: '0 0px 30px 30px', borderRadius: '20px', display: 'flex', boxShadow: "0px 6px 12px 0px #0000001A",flexDirection:'column'
            }} >
                       <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} ><h4 style={{marginBottom:'10px'}}> Achievements</h4><Button onClick={handelAchivement}  variant="outlined" sx={{borderRadius:'50px',display:'flex',alignItems:'center', textTransform: 'none' }}>Add Achievements <EditIcon sx={{paddingLeft:'5px'}} fontSize="small"/></Button></div>

         <div style={{display:'flex',alignItems:'flex-start'}}>
         <div  style={{marginRight:'20px',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginTop:'20px'}} >
               <div style={{width:'26px',height:'26px',borderRadius:'100%',backgroundColor:'#56CCF2'}} > </div>
                      <div style={{width:'2.5px',height:'235px',backgroundColor:'#56CCF2'}}></div>
                      <div style={{width:'26px',height:'26px',borderRadius:'100%',backgroundColor:'#9B51E0'}} > </div>
                      <div style={{width:'2.5px',height:'460px',backgroundColor:'#9B51E0'}}></div>

                 </div>
              <div>
              <div style={{margin:'18px 0',fontSize:'16px',fontWeight:'700'}}>Label <span><EditIcon sx={{paddingLeft:'5px',color:'#BDBDBD'}} fontSize="small"/></span></div>
              <div>
                <div style={{fontSize:'15px',fontWeight:'500',marginBottom:'18px'}}>2023-2014</div>
                
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</span>
                   <ul style={{margin:'0'}}><li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                     <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                    </ul>            
               </div>
               <div style={{margin:'18px 0',fontSize:'16px',fontWeight:'700'}}>Label <span><EditIcon sx={{paddingLeft:'5px',color:'#BDBDBD'}} fontSize="small"/></span></div>
              <div>
                <div style={{fontSize:'15px',fontWeight:'500',marginBottom:'18px'}}>2023-2014</div>
                <div style={{display:'flex',alignItems:'center'}}>
                  {[p1,p2,p3,p4].map((e,i)=>{

                    return (
                      <>
                      <div style={{margin:'0 5px',marginBottom:'10px'}} key={i}><img src={e} alt="" /></div>
                      </>
                    )
                  })}
                </div>
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</span>
                   <ul style={{margin:'0'}}><li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</li>
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                     <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </li>
                    </ul>            
               </div>
              </div>
         </div>
         
            </div>
            {/* forth */}
            <div id="Skills & Languages" style={{ display: 'flex', flexDirection:'row'
            }} >
              <div style={{width:'492px',backgroundColor:'#FFFFFF', padding: '26px 20px 26px 30px', margin: '0 0px 30px 30px', borderRadius: '20px',boxShadow: "0px 6px 12px 0px #0000001A" }}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}><span style={{fontSize:'16px',fontWeight:'600'}}>Key skills</span> <Button  variant="outlined" sx={{borderRadius:'50px',display:'flex',alignItems:'center', textTransform: 'none' }}>Add key skills</Button> </div>
        <div style={{margin:'18px 0px'}}> {["Leadership","MS Office","Words",'Indesign',"Indesign"].map((e,i)=>{
          return (<span style={{height:'24px',borderRadius:'4px',padding:'4px 10px 4px 10px',fontSize:'10px',margin:'10px 10px 10px 0px',backgroundColor:'#F2F2F2'}}>{e}</span>)
        })}</div>
              </div>

              <div style={{width:'492px',backgroundColor:'#FFFFFF', padding: '26px 20px 26px 30px', margin: '0 0px 30px 30px', borderRadius: '20px',boxShadow: "0px 6px 12px 0px #0000001A" }}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}><span style={{fontSize:'16px',fontWeight:'600'}}>Languages</span> <Button  variant="outlined" sx={{borderRadius:'50px',display:'flex',alignItems:'center', textTransform: 'none' }}>Add Language</Button> </div>
        <div style={{margin:'18px 0px'}}> {["Leadership","MS Office","Words",'Indesign',"Indesign"].map((e,i)=>{
          return (<span style={{height:'24px',borderRadius:'4px',padding:'4px 10px 4px 10px',fontSize:'10px',margin:'10px 10px 10px 0px',backgroundColor:'#F2F2F2'}}>{e}</span>)
        })}</div>
              </div>
            </div>

{/* fifth */}
<div id="News" style={{backgroundColor: '#FFFFFF', padding: '26px 20px 26px 30px', margin: '0 0px 30px 30px', borderRadius: '20px', display: 'flex', boxShadow: "0px 6px 12px 0px #0000001A",flexDirection:'column'
            }} >

              <div style={{fontSize:'16px',fontWeight:'600',margin:'0 0 22px 0'}}>News</div>
              <Grid container gap={2}>{cardlist.map((e,i)=>{
                return(<Grid item xs={3.8}>
                 <Card style={{boxShadow:'0px 0px 0px white'}} key={i} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 ,borderRadius:'10px'}}
        image={e.img}
        title="green iguana"
      />
      <CardContent style={{padding:'0px 0'}}>
       
        <Typography style={{fontSize:'14px' , fontWeight:'700',padding:'15px 0 0 0'}} color="text.secondary">
         {e.details}
        </Typography>
      </CardContent>
      <CardActions >
        <Typography sx={{display:'flex',alignItems:'center'}} size="small"><img style={{borderRadius:'100%',marginRight:'10px'}} width={'26px'} height={'26px'} src={e.profilephoto} alt="" /> <span style={{fontSize:'14px',fontWeight:500,color:'gray'}}>{e.accountname}</span></Typography>
        <Typography style={{color:'rgb(177 172 172)'}} fontSize={'12px'} fontWeight={'500'}>{e.timing} ago</Typography>
      </CardActions>
    </Card></Grid>)
              })
                
                }</Grid>
               <Divider style={{margin:'15px 0'}}></Divider>
                <div style={{ display:'flex',width:"100%",alignItems:'center',justifyContent:'center' }}><Button  variant="contained">Find more news</Button></div>
            </div>


          </Grid >

        </Grid >
        </Grid >
        </>
  )
}

export default Admin;
