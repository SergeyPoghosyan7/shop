import "..//Home/Home.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from "react-redux";
import { addBag, addWishlist, delWishlist, editLetters, editgetLetters, getBag, getBelt, getCharms, getLetters, getWishlist } from "./HomeSlice";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import belt from "../Home/Group5 2 (1).jpg"
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const style = {
  position: 'absolute',
  top: '250px',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:" 966px",
  height: "404px",
  flexShrink: 0,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  background: "#2F333A",

  boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.25)",
  p: 4,
};
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "660px",
  height: "383.37px",
  flexShrink: "0",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
background: "#2F333A",
};
export function Home() {
   // state
   const [open1, setOpen1] = React.useState(false);
   const handleOpen1 = () => setOpen1(true);
   const handleClose1 = () => setOpen1(false);
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [searchParams, setSearchParams] = useSearchParams()
   const [dataBag, setDataBag] = React.useState({

   })
   const lettersList = useSelector((state)=>  state.home.lettersList )
   const charmsList = useSelector((state)=> state.home.charmsList)
  //  console.log(lettersList);
   const beltList = useSelector((state)=>  state.home.beltList )
  //  const wishlist = useSelector((state)=> state.home.wishlist)
   const[ sum1, setSum1] = React.useState(0)
   const[tp , setTp] = React.useState("")
   const dispatch = useDispatch()
   const [beltImg , setBeltImg] = React.useState("")
   const [useId , setUseId] = React.useState(1)
  //  const nav = useNavigate()
  //  const { pathname } = useLocation()

   const [lettersBelt , setLettersBelt] = React.useState([

   ]

   )
   function  handleDelList(id2) {
    console.log(id2);
   let result = lettersBelt.filter((el)=>{
    return el.price !=id2
   })
   setLettersBelt(result)
   console.log(result);
   }

   React.useEffect(()=>{
    let sum= 0
 lettersBelt.map((el)=>{
    sum+=el.price1
 })
 console.log(sum , "sunm");
 setTp(sum)
   },[lettersBelt])
   // /select
   const [age, setAge] = React.useState('');

   const handleChange = (event) => {
     setAge(event.target.value);
   }
   // select
   React.useEffect(()=>{
      console.log(Array.isArray(lettersList) , "is arr");
   },[lettersList])
   React.useEffect(()=>{
    dispatch(getBelt())
    // dispatch(getWishlist())
    dispatch(getLetters())
    setSearchParams({
      location:"home"
    })
    dispatch(getCharms())
console.log(lettersList, "letlist");
dispatch(getBag())
   },[])
//    React.useEffect(()=>{
// // console.log(wishlist);
//    },[wishlist])
   return(
      <>
      <div className="body">
         <div className="header">
            <div className="composet">
            Composet
            </div>
            <div className="menu">
              <Link to="/">

              
               <Button onClick={()=>{
                  setSearchParams({
                     location:"home"
                  })
               }}>
                  {
                     searchParams.get("location") == "home"? <div  style={{borderBottom:"2px solid  #3485FF", "borderRadius":"3px"}} className="home">
               Home
               </div>:<div className="home">
               Home
               </div>
                  }
                  
               </Button></Link>   <Link to="Wishlist"> 
              <Button onClick={()=>{
                //  let s  = pathname
                //  s=""
                //  s+="/Wishlist"
                // nav("/Wishlist")
       
                  setSearchParams({
                     location:"wishlist"
                  })
                  // <Link to
               }}>
     
               {
                     searchParams.get("location") == "wishlist"?   <div className="wishlist"  style={{borderBottom:"2px solid  #3485FF", "borderRadius":"3px"}}>
               Wishlist
               <div className="wishlistSvg">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
  <g opacity="0.55">
    <path d="M17.75 0C15.0879 0 12.8892 2.24787 12 3.30878C11.1108 2.24787 8.91211 0 6.24998 0C2.80373 0 0 2.88043 0 6.42047C0 8.35185 0.843281 10.1518 2.31933 11.3836C2.3408 11.4174 2.36719 11.4485 2.39794 11.4764L11.647 19.8673C11.7446 19.9556 11.8721 20 12 20C12.1279 20 12.2558 19.9556 12.3535 19.8669L21.9102 11.1821L22.0088 11.0951C22.0869 11.0281 22.1641 10.9601 22.2505 10.8732C22.2866 10.8408 22.3164 10.8043 22.3394 10.7648C23.4112 9.57166 24 8.03267 24 6.42047C24 2.88043 21.1963 0 17.75 0ZM21.5073 10.2535C21.4936 10.2681 21.4809 10.2836 21.4697 10.2996C21.4229 10.3485 21.3716 10.3915 21.3208 10.4355L11.9995 18.9032L3.21877 10.9366C3.19045 10.886 3.15089 10.8398 3.10256 10.8012C1.76611 9.74033 0.999984 8.14364 0.999984 6.42047C0.999984 3.38156 3.35498 0.909119 6.24998 0.909119C9.11231 0.909119 11.5552 4.30312 11.5796 4.3373C11.7642 4.59652 12.2358 4.59652 12.4204 4.3373C12.4448 4.30312 14.8877 0.909119 17.75 0.909119C20.645 0.909119 23 3.3816 23 6.42047C23 7.85246 22.4697 9.21388 21.5073 10.2535Z" fill="white"/>
  </g>
</svg>
               </div>
               
               </div>:<>
               <div className="wishlist"  >
               Wishlist
               <div className="wishlistSvg">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
  <g opacity="0.55">
    <path d="M17.75 0C15.0879 0 12.8892 2.24787 12 3.30878C11.1108 2.24787 8.91211 0 6.24998 0C2.80373 0 0 2.88043 0 6.42047C0 8.35185 0.843281 10.1518 2.31933 11.3836C2.3408 11.4174 2.36719 11.4485 2.39794 11.4764L11.647 19.8673C11.7446 19.9556 11.8721 20 12 20C12.1279 20 12.2558 19.9556 12.3535 19.8669L21.9102 11.1821L22.0088 11.0951C22.0869 11.0281 22.1641 10.9601 22.2505 10.8732C22.2866 10.8408 22.3164 10.8043 22.3394 10.7648C23.4112 9.57166 24 8.03267 24 6.42047C24 2.88043 21.1963 0 17.75 0ZM21.5073 10.2535C21.4936 10.2681 21.4809 10.2836 21.4697 10.2996C21.4229 10.3485 21.3716 10.3915 21.3208 10.4355L11.9995 18.9032L3.21877 10.9366C3.19045 10.886 3.15089 10.8398 3.10256 10.8012C1.76611 9.74033 0.999984 8.14364 0.999984 6.42047C0.999984 3.38156 3.35498 0.909119 6.24998 0.909119C9.11231 0.909119 11.5552 4.30312 11.5796 4.3373C11.7642 4.59652 12.2358 4.59652 12.4204 4.3373C12.4448 4.30312 14.8877 0.909119 17.75 0.909119C20.645 0.909119 23 3.3816 23 6.42047C23 7.85246 22.4697 9.21388 21.5073 10.2535Z" fill="white"/>
  </g>
</svg>
               </div>
               
               </div>
               </>
                  }
              </Button>  </Link>
              <Link to="/Bag">
             <Button onClick={()=>{
                  setSearchParams({
                     location:"bag"
                  })
               }}>
                  
{searchParams.get("location") == "bag"? <>
 <div className="bag"   style={{borderBottom:"2px solid  #3485FF", "borderRadius":"3px"}}>
               Bag
               <div className="bagSvg">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
  <g opacity="0.55">
    <path d="M7.35976 10.5016C6.90479 10.5016 6.53467 10.8649 6.53467 11.3115V15.9593C6.53467 16.4059 6.90479 16.7692 7.35976 16.7692H8.30682C8.76179 16.7692 9.13192 16.4059 9.13192 15.9593V11.3115C9.13192 10.8649 8.76179 10.5016 8.30682 10.5016H7.35976V10.5016ZM8.42875 11.3115V15.9592C8.42875 16.0253 8.37404 16.079 8.30678 16.079H7.35972C7.29245 16.079 7.23775 16.0253 7.23775 15.9592V11.3115C7.23775 11.2454 7.29245 11.1917 7.35972 11.1917H8.30678C8.37404 11.1918 8.42875 11.2455 8.42875 11.3115Z" fill="white"/>
    <path d="M11.5263 10.5016C11.0713 10.5016 10.7012 10.8649 10.7012 11.3115V15.9593C10.7012 16.4059 11.0713 16.7692 11.5263 16.7692H12.4733C12.9283 16.7692 13.2984 16.4059 13.2984 15.9593V11.3115C13.2984 10.8649 12.9283 10.5016 12.4733 10.5016H11.5263V10.5016ZM12.5953 11.3115V15.9592C12.5953 16.0253 12.5406 16.079 12.4733 16.079H11.5263C11.459 16.079 11.4043 16.0253 11.4043 15.9592V11.3115C11.4043 11.2454 11.459 11.1917 11.5263 11.1917H12.4733C12.5406 11.1918 12.5953 11.2455 12.5953 11.3115Z" fill="white"/>
    <path d="M16.6403 10.5016H15.6933C15.2383 10.5016 14.8682 10.8649 14.8682 11.3115V15.9592C14.8682 16.4058 15.2383 16.7691 15.6933 16.7691H16.6403C17.0953 16.7691 17.4654 16.4058 17.4654 15.9592V11.3114C17.4654 10.8649 17.0953 10.5016 16.6403 10.5016ZM16.7623 15.9592C16.7623 16.0252 16.7076 16.0789 16.6403 16.0789H15.6933C15.626 16.0789 15.5713 16.0252 15.5713 15.9592V11.3114C15.5713 11.2454 15.626 11.1917 15.6933 11.1917H16.6403C16.7076 11.1917 16.7623 11.2454 16.7623 11.3114V15.9592Z" fill="white"/>
    <path d="M23.175 6.69049H20.8027C20.6085 6.69049 20.4511 6.84494 20.4511 7.03556C20.4511 7.22618 20.6085 7.38064 20.8027 7.38064H23.175C23.2422 7.38064 23.2969 7.43429 23.2969 7.50026V8.42967C23.2969 8.49583 23.2422 8.54971 23.175 8.54971H17.4087C17.4368 8.49606 17.4613 8.4402 17.4818 8.38223C17.5954 8.06053 17.5746 7.71467 17.4231 7.40838L17.4094 7.38059H19.1573C19.3515 7.38059 19.5089 7.22614 19.5089 7.03552C19.5089 6.8449 19.3515 6.69044 19.1573 6.69044H17.0682L14.1156 0.718025C13.8029 0.0857553 13.0244 -0.178986 12.3803 0.127762C12.2352 0.196869 12.1072 0.290086 12 0.402166C11.8928 0.290132 11.7648 0.196869 11.6197 0.127762C10.9755 -0.179032 10.197 0.0857553 9.88444 0.718025L6.93183 6.69049H0.825C0.370078 6.69049 0 7.05378 0 7.50026V8.42967C0 8.87642 0.370125 9.23986 0.825 9.23986H1.30927L2.7405 17.5506C2.88497 18.3905 3.61983 19 4.48781 19H16.4902C16.6843 19 16.8417 18.8455 16.8417 18.6549C16.8417 18.4643 16.6843 18.3099 16.4902 18.3099H4.48781C3.96422 18.3099 3.52097 17.9422 3.43383 17.4357L2.02238 9.23986H3.08812C3.28228 9.23986 3.43969 9.0854 3.43969 8.89478C3.43969 8.70416 3.28228 8.54971 3.08812 8.54971H0.825C0.757781 8.54971 0.703125 8.49583 0.703125 8.42967V7.50026C0.703125 7.43429 0.757828 7.38064 0.825 7.38064H6.59063L6.57689 7.40843C6.42548 7.71472 6.40462 8.06057 6.5182 8.38228C6.53869 8.44025 6.5632 8.49611 6.59128 8.54975H4.73344C4.53928 8.54975 4.38188 8.70421 4.38188 8.89483C4.38188 9.08545 4.53928 9.2399 4.73344 9.2399H22.023L20.5706 17.4405C20.4815 17.9442 20.0385 18.3099 19.5173 18.3099H18.1355C17.9413 18.3099 17.7839 18.4643 17.7839 18.6549C17.7839 18.8455 17.9413 19 18.1355 19H19.5173C20.3813 19 21.1156 18.3938 21.2634 17.5587L22.7367 9.23986H23.175C23.6299 9.23986 24 8.87642 24 8.42967V7.50026C24 7.05374 23.6299 6.69049 23.175 6.69049ZM12.3846 1.08316C12.4367 0.935652 12.5442 0.816854 12.6873 0.748713C12.7708 0.708915 12.8592 0.690097 12.9463 0.690097C13.1674 0.690097 13.3801 0.811425 13.483 1.01934L16.7905 7.7097C16.86 7.85017 16.8695 8.00872 16.8174 8.15623C16.7654 8.30374 16.6578 8.42253 16.5148 8.49068C16.3717 8.55891 16.2101 8.56825 16.0598 8.51709C15.9095 8.46601 15.7885 8.36047 15.7191 8.22L12.4115 1.52969C12.3421 1.38922 12.3325 1.23067 12.3846 1.08316ZM12 2.27813L14.1814 6.69049H9.81863L12 2.27813ZM10.517 1.01934C10.6199 0.811333 10.8326 0.690097 11.0537 0.690097C11.1408 0.690097 11.2292 0.708961 11.3127 0.748713C11.4558 0.816808 11.5633 0.935606 11.6154 1.08316C11.6675 1.23067 11.6579 1.38922 11.5885 1.52969L8.28094 8.22C8.21152 8.36047 8.09053 8.46601 7.9402 8.51709C7.78992 8.5682 7.62834 8.55891 7.48523 8.49068C7.34217 8.42258 7.23464 8.30378 7.18256 8.15623C7.13048 8.00872 7.14005 7.85017 7.20947 7.7097L10.517 1.01934ZM8.91352 8.52132L9.47742 7.38064H14.5226L15.0865 8.52132C15.0912 8.53093 15.0964 8.54023 15.1014 8.54971H8.89861C8.90358 8.54023 8.90873 8.53093 8.91352 8.52132Z" fill="white"/>
  </g>
</svg></div>
               </div> </>:<>
 <div className="bag">
               Bag
               <div className="bagSvg">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
  <g opacity="0.55">
    <path d="M7.35976 10.5016C6.90479 10.5016 6.53467 10.8649 6.53467 11.3115V15.9593C6.53467 16.4059 6.90479 16.7692 7.35976 16.7692H8.30682C8.76179 16.7692 9.13192 16.4059 9.13192 15.9593V11.3115C9.13192 10.8649 8.76179 10.5016 8.30682 10.5016H7.35976V10.5016ZM8.42875 11.3115V15.9592C8.42875 16.0253 8.37404 16.079 8.30678 16.079H7.35972C7.29245 16.079 7.23775 16.0253 7.23775 15.9592V11.3115C7.23775 11.2454 7.29245 11.1917 7.35972 11.1917H8.30678C8.37404 11.1918 8.42875 11.2455 8.42875 11.3115Z" fill="white"/>
    <path d="M11.5263 10.5016C11.0713 10.5016 10.7012 10.8649 10.7012 11.3115V15.9593C10.7012 16.4059 11.0713 16.7692 11.5263 16.7692H12.4733C12.9283 16.7692 13.2984 16.4059 13.2984 15.9593V11.3115C13.2984 10.8649 12.9283 10.5016 12.4733 10.5016H11.5263V10.5016ZM12.5953 11.3115V15.9592C12.5953 16.0253 12.5406 16.079 12.4733 16.079H11.5263C11.459 16.079 11.4043 16.0253 11.4043 15.9592V11.3115C11.4043 11.2454 11.459 11.1917 11.5263 11.1917H12.4733C12.5406 11.1918 12.5953 11.2455 12.5953 11.3115Z" fill="white"/>
    <path d="M16.6403 10.5016H15.6933C15.2383 10.5016 14.8682 10.8649 14.8682 11.3115V15.9592C14.8682 16.4058 15.2383 16.7691 15.6933 16.7691H16.6403C17.0953 16.7691 17.4654 16.4058 17.4654 15.9592V11.3114C17.4654 10.8649 17.0953 10.5016 16.6403 10.5016ZM16.7623 15.9592C16.7623 16.0252 16.7076 16.0789 16.6403 16.0789H15.6933C15.626 16.0789 15.5713 16.0252 15.5713 15.9592V11.3114C15.5713 11.2454 15.626 11.1917 15.6933 11.1917H16.6403C16.7076 11.1917 16.7623 11.2454 16.7623 11.3114V15.9592Z" fill="white"/>
    <path d="M23.175 6.69049H20.8027C20.6085 6.69049 20.4511 6.84494 20.4511 7.03556C20.4511 7.22618 20.6085 7.38064 20.8027 7.38064H23.175C23.2422 7.38064 23.2969 7.43429 23.2969 7.50026V8.42967C23.2969 8.49583 23.2422 8.54971 23.175 8.54971H17.4087C17.4368 8.49606 17.4613 8.4402 17.4818 8.38223C17.5954 8.06053 17.5746 7.71467 17.4231 7.40838L17.4094 7.38059H19.1573C19.3515 7.38059 19.5089 7.22614 19.5089 7.03552C19.5089 6.8449 19.3515 6.69044 19.1573 6.69044H17.0682L14.1156 0.718025C13.8029 0.0857553 13.0244 -0.178986 12.3803 0.127762C12.2352 0.196869 12.1072 0.290086 12 0.402166C11.8928 0.290132 11.7648 0.196869 11.6197 0.127762C10.9755 -0.179032 10.197 0.0857553 9.88444 0.718025L6.93183 6.69049H0.825C0.370078 6.69049 0 7.05378 0 7.50026V8.42967C0 8.87642 0.370125 9.23986 0.825 9.23986H1.30927L2.7405 17.5506C2.88497 18.3905 3.61983 19 4.48781 19H16.4902C16.6843 19 16.8417 18.8455 16.8417 18.6549C16.8417 18.4643 16.6843 18.3099 16.4902 18.3099H4.48781C3.96422 18.3099 3.52097 17.9422 3.43383 17.4357L2.02238 9.23986H3.08812C3.28228 9.23986 3.43969 9.0854 3.43969 8.89478C3.43969 8.70416 3.28228 8.54971 3.08812 8.54971H0.825C0.757781 8.54971 0.703125 8.49583 0.703125 8.42967V7.50026C0.703125 7.43429 0.757828 7.38064 0.825 7.38064H6.59063L6.57689 7.40843C6.42548 7.71472 6.40462 8.06057 6.5182 8.38228C6.53869 8.44025 6.5632 8.49611 6.59128 8.54975H4.73344C4.53928 8.54975 4.38188 8.70421 4.38188 8.89483C4.38188 9.08545 4.53928 9.2399 4.73344 9.2399H22.023L20.5706 17.4405C20.4815 17.9442 20.0385 18.3099 19.5173 18.3099H18.1355C17.9413 18.3099 17.7839 18.4643 17.7839 18.6549C17.7839 18.8455 17.9413 19 18.1355 19H19.5173C20.3813 19 21.1156 18.3938 21.2634 17.5587L22.7367 9.23986H23.175C23.6299 9.23986 24 8.87642 24 8.42967V7.50026C24 7.05374 23.6299 6.69049 23.175 6.69049ZM12.3846 1.08316C12.4367 0.935652 12.5442 0.816854 12.6873 0.748713C12.7708 0.708915 12.8592 0.690097 12.9463 0.690097C13.1674 0.690097 13.3801 0.811425 13.483 1.01934L16.7905 7.7097C16.86 7.85017 16.8695 8.00872 16.8174 8.15623C16.7654 8.30374 16.6578 8.42253 16.5148 8.49068C16.3717 8.55891 16.2101 8.56825 16.0598 8.51709C15.9095 8.46601 15.7885 8.36047 15.7191 8.22L12.4115 1.52969C12.3421 1.38922 12.3325 1.23067 12.3846 1.08316ZM12 2.27813L14.1814 6.69049H9.81863L12 2.27813ZM10.517 1.01934C10.6199 0.811333 10.8326 0.690097 11.0537 0.690097C11.1408 0.690097 11.2292 0.708961 11.3127 0.748713C11.4558 0.816808 11.5633 0.935606 11.6154 1.08316C11.6675 1.23067 11.6579 1.38922 11.5885 1.52969L8.28094 8.22C8.21152 8.36047 8.09053 8.46601 7.9402 8.51709C7.78992 8.5682 7.62834 8.55891 7.48523 8.49068C7.34217 8.42258 7.23464 8.30378 7.18256 8.15623C7.13048 8.00872 7.14005 7.85017 7.20947 7.7097L10.517 1.01934ZM8.91352 8.52132L9.47742 7.38064H14.5226L15.0865 8.52132C15.0912 8.53093 15.0964 8.54023 15.1014 8.54971H8.89861C8.90358 8.54023 8.90873 8.53093 8.91352 8.52132Z" fill="white"/>
  </g>
</svg></div>
               </div> </>}
             </Button>  
          
               </Link>
            
               <Button onClick={()=>{
                  setSearchParams({
                     location:"myAccaunt"
                  })
               }}>

            {searchParams.get("location") == "myAccaunt"?<div  style={{borderBottom:"2px solid  #3485FF", "borderRadius":"3px"}}className="myAccaunt">
               MY ACCAUNT
               </div>: <div className="myAccaunt">
               MY ACCAUNT
               </div>}
              
                 </Button>
               <div className="leng">
               <Box sx={{ minWidth: 70 , border:"none" , color:"white", "marginRight":"15px"}}>
      <FormControl sx={{  border:"none" , color:"white"}}fullWidth>
        <InputLabel sx={{ border:"none" , color:" rgba(42, 44, 51, 0.55)"}} id="demo-simple-select-label">{age}</InputLabel>
        <Select
        sx={{ border:"none" , color:"white"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={age}
          onChange={handleChange}
        >
          <MenuItem value={"Ru"}onClick={()=>{
                  setSearchParams({
                     leng:"Ru"
                  })
               }}>Ru</MenuItem>
          <MenuItem value={"Arm"}onClick={()=>{
                  setSearchParams({
                     leng:"Arm"
                  })
               }}>Arm</MenuItem>
          <MenuItem value={"Eng"} onClick={()=>{
                  setSearchParams({
                     leng:"Eng"
                  })
               }}>Eng</MenuItem>
        </Select>
      </FormControl>
    </Box>
               </div>
            </div>
            </div>
{/* collection  1111111111111 */}
            <div className="collection">
          
                     <div className="textCollection"> 
                      collection </div>
                     <div className="collectionDivs">

                      {/* <button onClick={()=>{
                     dispatch(getLetters())
                      }}>
                        send
                      </button> */}
                  
                  
                       {Array.isArray(lettersList)  && lettersList?.map((el ,ind)=>{
                    
                                 return(
            <>
    <button className="btnCol"  key={el.id} onClick={()=>{
      if (lettersBelt.length  < 9) {
        let p = Math.round(Math.random()*550)
        let i =0
        i+=p
        setSum1(i)
    //  console.log(i);
         setLettersBelt([

    
        ...lettersBelt,  {
        id:el.id,
        img:el.img,  
              price1:el.price,
       price:Math.round(Math.random()*550)


        }  ]
      )
      }
     
      setSearchParams({
        lettersId : el.id
      })
    }}>
    
{searchParams.get("lettersId") == el.id?
                        <div className="collectionDivsImg"  style={{background: "#202226"}}>
         
                      <div className="glavImg">                 
              <div className="wishlistAdd">
                           {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"  viewBox="0 0 16 14" fill="none">
<path d="M11.8333 0C10.0586 0 8.59278 1.57351 8 2.31614C7.40722 1.57351 5.94141 0 4.16666 0C1.86916 0 0 2.0163 0 4.49432C0 5.84628 0.562187 7.10625 1.54622 7.96853C1.56053 7.99216 1.57812 8.0139 1.59862 8.03347L7.76466 13.9071C7.82975 13.9689 7.91472 14 8 14C8.08528 14 8.17056 13.9689 8.23569 13.9068L14.6068 7.82747L14.6725 7.76656C14.7246 7.71964 14.7761 7.67209 14.8337 7.61121C14.8577 7.58854 14.8776 7.56303 14.8929 7.53538C15.6074 6.70015 16 5.62286 16 4.49432C16 2.0163 14.1309 0 11.8333 0ZM14.3382 7.17743C14.3291 7.18769 14.3206 7.19855 14.3132 7.20973C14.2819 7.24392 14.2477 7.27404 14.2139 7.30483L7.99969 13.2322L2.14584 7.65562C2.12697 7.62019 2.10059 7.58788 2.06838 7.56085C1.17741 6.81822 0.666656 5.70054 0.666656 4.49432C0.666656 2.36709 2.23666 0.636383 4.16666 0.636383C6.07487 0.636383 7.70344 3.01218 7.71972 3.03611C7.84278 3.21756 8.15722 3.21756 8.28028 3.03611C8.29656 3.01218 9.92513 0.636383 11.8333 0.636383C13.7633 0.636383 15.3333 2.36712 15.3333 4.49432C15.3333 5.49671 14.9798 6.44971 14.3382 7.17743Z" fill="white"/>
</svg>  */}

  {/* <FavoriteBorder onClick={()=>{
    setSearchParams({
      wishlist:el.id
    })
  }}/>
{<Favorite  sx={{color:"red"}}/>} */}
{el.wishlist === false ? <FavoriteBorder onClick={()=>{
console.log(el.wishlist , "wishlisgt");

  let data = {
    id:el.id,
    img:el.img,
    wishlist:true,
   price: el.price,
   wishlist5:el.wishlist5

  } 
 
dispatch(editLetters(data ,el.id)).then(()=>{
  console.log(lettersList, "letr");
  // .location.reload(false);
  dispatch(getLetters()
  )

})
      // console.log("favorite");
      // let data = {
      //   // "id":el.id,
      //   "img":el.img,
      //   "price":el.price,
      //   userId:useId
      // }
      // console.log(data);
      // console.log(el.img);
      // dispatch(addWishlist(data)).then(()=>{
      //   dispatch(getWishlist())
      //   console.log(wishlist);
      // })
      // console.log(el.img ,"eele");
    }} ></FavoriteBorder>:  <Favorite  sx={{color:"red"}} onClick={()=>{
      let data = {
        id:el.id,
        img:el.img,
        wishlist:false,
        price:el.price,
        wishlist5:el.wishlist5,

      }
      console.log(el.wishlist , "wishlisgt");
    dispatch(editLetters(data)).then(()=>{
      dispatch(getLetters())
    })
    }}/>
}

    
                     </div>
  <img src={el.img} alt="" width="64px"  className="imgLet"  height="94px" srcset="" />
  </div>
   <div className="svgImg"> 


  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_d_1_560)">
    <circle cx="12" cy="9" r="6" fill="#FFBE18"/>
    <circle cx="12" cy="9" r="5.75" stroke="white" stroke-width="0.5"/>
  </g>
  <path d="M17 9C17 11.7614 14.7614 14 12 14V4C14.7614 4 17 6.23858 17 9Z" fill="#B0B0B0"/>
  <defs>
    <filter id="filter0_d_1_560" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_560"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_560" result="shape"/>
    </filter>
  </defs>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_d_1_556)">
    <circle cx="12" cy="9" r="6" fill="#FFBE18"/>
    <circle cx="12" cy="9" r="5.75" stroke="white" stroke-width="0.5"/>
  </g>
  <defs>
    <filter id="filter0_d_1_556" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_556"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_556" result="shape"/>
    </filter>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_d_1_558)">
    <circle cx="12" cy="9" r="6" fill="#B0B0B0"/>
    <circle cx="12" cy="9" r="5.75" stroke="white" stroke-width="0.5"/>
  </g>
  <defs>
    <filter id="filter0_d_1_558" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_558"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_558" result="shape"/>
    </filter>
  </defs>
</svg>  </div>
   <div className="tvyal">
                   <p> CustomName </p>
                 
                     Bracelet 
                
                   </div>   <div className="price">{el.price}.00$ <Button sx={{
                      // marginTop: "15px",
                      // marginRight:"55px",
                      position:"absolute",
                      top:"5px",
                      left:"28px",
                      color: "#B0B0B0",
                      fontFamily: "Montserrat",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      textDecorationLine: "underline",
                      textTransform: "capitalize",
                   }} onClick={()=>{
                    handleOpen1()
                   }}><p className="see" >see more</p></Button></div>
                     </div>:    <div className="collectionDivsImg">
                        
              <div className="glavImg" >

             <div className="wishlistAdd">
                           {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"  viewBox="0 0 16 14" fill="none">
<path d="M11.8333 0C10.0586 0 8.59278 1.57351 8 2.31614C7.40722 1.57351 5.94141 0 4.16666 0C1.86916 0 0 2.0163 0 4.49432C0 5.84628 0.562187 7.10625 1.54622 7.96853C1.56053 7.99216 1.57812 8.0139 1.59862 8.03347L7.76466 13.9071C7.82975 13.9689 7.91472 14 8 14C8.08528 14 8.17056 13.9689 8.23569 13.9068L14.6068 7.82747L14.6725 7.76656C14.7246 7.71964 14.7761 7.67209 14.8337 7.61121C14.8577 7.58854 14.8776 7.56303 14.8929 7.53538C15.6074 6.70015 16 5.62286 16 4.49432C16 2.0163 14.1309 0 11.8333 0ZM14.3382 7.17743C14.3291 7.18769 14.3206 7.19855 14.3132 7.20973C14.2819 7.24392 14.2477 7.27404 14.2139 7.30483L7.99969 13.2322L2.14584 7.65562C2.12697 7.62019 2.10059 7.58788 2.06838 7.56085C1.17741 6.81822 0.666656 5.70054 0.666656 4.49432C0.666656 2.36709 2.23666 0.636383 4.16666 0.636383C6.07487 0.636383 7.70344 3.01218 7.71972 3.03611C7.84278 3.21756 8.15722 3.21756 8.28028 3.03611C8.29656 3.01218 9.92513 0.636383 11.8333 0.636383C13.7633 0.636383 15.3333 2.36712 15.3333 4.49432C15.3333 5.49671 14.9798 6.44971 14.3382 7.17743Z" fill="white"/>
</svg>  */}
   {el.wishlist ==false ? <FavoriteBorder onClick={()=>{
  let data = {
    id:el.id,
    img:el.img,
    wishlist:true,
    wishlist5:el.wishlist5
,
    price:el.price
  }
dispatch(editLetters(data , el.id)).then(()=>{
  dispatch(getLetters())
})
      // console.log("favorite");
      // let data = {
      //   // "id":el.id,
      //   "img":el.img,
      //   "price":el.price,
      //   userId:useId
      // }
      // console.log(data);
      // console.log(el.img);
      // dispatch(addWishlist(data)).then(()=>{
      //   dispatch(getWishlist())
      //   console.log(wishlist);
      // })
      // console.log(el.img ,"eele");
    }} ></FavoriteBorder>:  <Favorite  sx={{color:"red"}} onClick={()=>{
      let data = {
        id:el.id,
        img:el.img,
        wishlist:false,
        price: el.price,
        wishlist5:el.wishlist5
        
      }
   
    dispatch(editLetters(data , el.id)).then(()=>{
      dispatch(getLetters())
    })
    }}/>
}
                     </div>
  <img src={el.img} alt="" width="64px"  className="imgLet" height="94px" srcset="" />
      </div>
   <div className="svgImg"> 


  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_d_1_560)">
    <circle cx="12" cy="9" r="6" fill="#FFBE18"/>
    <circle cx="12" cy="9" r="5.75" stroke="white" stroke-width="0.5"/>
  </g>
  <path d="M17 9C17 11.7614 14.7614 14 12 14V4C14.7614 4 17 6.23858 17 9Z" fill="#B0B0B0"/>
  <defs>
    <filter id="filter0_d_1_560" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_560"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_560" result="shape"/>
    </filter>
  </defs>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_d_1_556)">
    <circle cx="12" cy="9" r="6" fill="#FFBE18"/>
    <circle cx="12" cy="9" r="5.75" stroke="white" stroke-width="0.5"/>
  </g>
  <defs>
    <filter id="filter0_d_1_556" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_556"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_556" result="shape"/>
    </filter>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_d_1_558)">
    <circle cx="12" cy="9" r="6" fill="#B0B0B0"/>
    <circle cx="12" cy="9" r="5.75" stroke="white" stroke-width="0.5"/>
  </g>
  <defs>
    <filter id="filter0_d_1_558" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_558"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_558" result="shape"/>
    </filter>
  </defs>
</svg>  </div>
   <div className="tvyal">
                   <p> CustomName </p>
                 
                     Bracelet
                 
                
                   </div>   <div className="price"  key={el.id}>{el.price}.00$ <Button sx={{
                      // marginTop: "15px",
                      // marginRight:"55px",
                      position:"absolute",
                      top:"5px",
                      left:"28px",
                      color: "#B0B0B0",
                      fontFamily: "Montserrat",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      textDecorationLine: "underline",
                      textTransform: "capitalize",
                   }} onClick={()=>{
                    handleOpen1()
                   }}><p className="see" >see more</p></Button></div>
                   
                     </div>
                     
                     
                     }
                       </button>   
                          </>
                        )
                       })}
              </div>  
                 
                     <div className="textCharms">
                     CHArms  
                     </div>


                     {/* collectionDivs 2*/}
                     {/* collectionDivs 2*/}
                     {/* collectionDivs 2*/}
                     {/* collectionDivs 2*/}
                     <div className="collectionDivs">
                       
                     {Array.isArray(lettersList)  && lettersList?.map((el ,ind)=>{
                    
                        return(
                          <>
     <button className="btnCol"  key={el.id*12} onClick={()=>{
      
      if (lettersBelt.length  < 9) {
        setLettersBelt([

   
       ...lettersBelt,  {
       id:el.id,
       img:el.img,
       price1:el.price,
       price:Math.round(Math.random()*550)

       }  ]
     )
     }
      console.log(lettersBelt);
      setSearchParams({
        lettersId1 : el.id
      })
    }}>
    
{searchParams.get("lettersId1") == el.id?
                        <div className="collectionDivsImg"  style={{background: "#202226"}}>

                <div className="glavImg">             
                <div className="wishlistAdd2">
                           {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"  viewBox="0 0 16 14" fill="none">
<path d="M11.8333 0C10.0586 0 8.59278 1.57351 8 2.31614C7.40722 1.57351 5.94141 0 4.16666 0C1.86916 0 0 2.0163 0 4.49432C0 5.84628 0.562187 7.10625 1.54622 7.96853C1.56053 7.99216 1.57812 8.0139 1.59862 8.03347L7.76466 13.9071C7.82975 13.9689 7.91472 14 8 14C8.08528 14 8.17056 13.9689 8.23569 13.9068L14.6068 7.82747L14.6725 7.76656C14.7246 7.71964 14.7761 7.67209 14.8337 7.61121C14.8577 7.58854 14.8776 7.56303 14.8929 7.53538C15.6074 6.70015 16 5.62286 16 4.49432C16 2.0163 14.1309 0 11.8333 0ZM14.3382 7.17743C14.3291 7.18769 14.3206 7.19855 14.3132 7.20973C14.2819 7.24392 14.2477 7.27404 14.2139 7.30483L7.99969 13.2322L2.14584 7.65562C2.12697 7.62019 2.10059 7.58788 2.06838 7.56085C1.17741 6.81822 0.666656 5.70054 0.666656 4.49432C0.666656 2.36709 2.23666 0.636383 4.16666 0.636383C6.07487 0.636383 7.70344 3.01218 7.71972 3.03611C7.84278 3.21756 8.15722 3.21756 8.28028 3.03611C8.29656 3.01218 9.92513 0.636383 11.8333 0.636383C13.7633 0.636383 15.3333 2.36712 15.3333 4.49432C15.3333 5.49671 14.9798 6.44971 14.3382 7.17743Z" fill="white"/>
</svg>  */}

   {el.wishlist5 ==false ? <FavoriteBorder onClick={()=>{
  let data = {
    id:el.id,
    img:el.img,
    wishlist:el.wishlist,
    wishlist5:true,
    price:el.price
  }
dispatch(editLetters(data , el.id)).then(()=>{
  dispatch(getLetters())
})
      // console.log("favorite");
      // let data = {
      //   // "id":el.id,
      //   "img":el.img,
      //   "price":el.price,
      //   userId:useId
      // }
      // console.log(data);
      // console.log(el.img);
      // dispatch(addWishlist(data)).then(()=>{
      //   dispatch(getWishlist())
      //   console.log(wishlist);
      // })
      // console.log(el.img ,"eele");
    }} ></FavoriteBorder>:  <Favorite  sx={{color:"red"}} onClick={()=>{
      let data = {
        id:el.id,
        img:el.img,
        wishlist:el.wishlist,
        price: el.price,
        wishlist5:false,
        
      }
   
    dispatch(editLetters(data , el.id)).then(()=>{
      dispatch(getLetters())
    })
    }}/>
}
                     </div>
  <img src={el.img} alt="" width="64px"  className="listLet"  height="94px" srcset="" /></div>
   <div className="svgImg"> 


  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_d_1_560)">
    <circle cx="12" cy="9" r="6" fill="#FFBE18"/>
    <circle cx="12" cy="9" r="5.75" stroke="white" stroke-width="0.5"/>
  </g>
  <path d="M17 9C17 11.7614 14.7614 14 12 14V4C14.7614 4 17 6.23858 17 9Z" fill="#B0B0B0"/>
  <defs>
    <filter id="filter0_d_1_560" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_560"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_560" result="shape"/>
    </filter>
  </defs>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_d_1_556)">
    <circle cx="12" cy="9" r="6" fill="#FFBE18"/>
    <circle cx="12" cy="9" r="5.75" stroke="white" stroke-width="0.5"/>
  </g>
  <defs>
    <filter id="filter0_d_1_556" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_556"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_556" result="shape"/>
    </filter>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_d_1_558)">
    <circle cx="12" cy="9" r="6" fill="#B0B0B0"/>
    <circle cx="12" cy="9" r="5.75" stroke="white" stroke-width="0.5"/>
  </g>
  <defs>
    <filter id="filter0_d_1_558" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_558"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_558" result="shape"/>
    </filter>
  </defs>
</svg>  </div>
   <div className="tvyal2">
                   <p> CustomName </p>
                 
                     Bracelet
                 
                
                   </div>    <div className="price">{el.price}.00$ <Button sx={{
                      // marginTop: "15px",
                      // marginRight:"55px",
                      position:"absolute",
                      top:"5px",
                      left:"28px",
                      color: "#B0B0B0",
                      fontFamily: "Montserrat",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      textDecorationLine: "underline",
                      textTransform: "capitalize",
                   }} onClick={()=>{
                    handleOpen1()
                   }}><p className="see" >see more</p></Button></div>
                     </div>:    <div className="collectionDivsImg">
                      
              <div className="glavImg">
                       <div className="wishlistAdd2">
              {el.wishlist5 ==false ? <FavoriteBorder onClick={()=>{
  let data = {
    id:el.id,
    img:el.img,
    wishlist:el.wishlist,
    wishlist5:true,
    price:el.price
  }
dispatch(editLetters(data , el.id)).then(()=>{
  dispatch(getLetters())
})
      // console.log("favorite");
      // let data = {
      //   // "id":el.id,
      //   "img":el.img,
      //   "price":el.price,
      //   userId:useId
      // }
      // console.log(data);
      // console.log(el.img);
      // dispatch(addWishlist(data)).then(()=>{
      //   dispatch(getWishlist())
      //   console.log(wishlist);
      // })
      // console.log(el.img ,"eele");
    }} ></FavoriteBorder>:  <Favorite  sx={{color:"red"}} onClick={()=>{
      let data = {
        id:el.id,
        img:el.img,
        wishlist:el.wishlist,
        price: el.price,
        wishlis5:false,
        
      }
   
    dispatch(editLetters(data , el.id)).then(()=>{
      dispatch(getLetters())
    })
    }}/>
}
            
                           {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14"  viewBox="0 0 16 14" fill="none">
<path d="M11.8333 0C10.0586 0 8.59278 1.57351 8 2.31614C7.40722 1.57351 5.94141 0 4.16666 0C1.86916 0 0 2.0163 0 4.49432C0 5.84628 0.562187 7.10625 1.54622 7.96853C1.56053 7.99216 1.57812 8.0139 1.59862 8.03347L7.76466 13.9071C7.82975 13.9689 7.91472 14 8 14C8.08528 14 8.17056 13.9689 8.23569 13.9068L14.6068 7.82747L14.6725 7.76656C14.7246 7.71964 14.7761 7.67209 14.8337 7.61121C14.8577 7.58854 14.8776 7.56303 14.8929 7.53538C15.6074 6.70015 16 5.62286 16 4.49432C16 2.0163 14.1309 0 11.8333 0ZM14.3382 7.17743C14.3291 7.18769 14.3206 7.19855 14.3132 7.20973C14.2819 7.24392 14.2477 7.27404 14.2139 7.30483L7.99969 13.2322L2.14584 7.65562C2.12697 7.62019 2.10059 7.58788 2.06838 7.56085C1.17741 6.81822 0.666656 5.70054 0.666656 4.49432C0.666656 2.36709 2.23666 0.636383 4.16666 0.636383C6.07487 0.636383 7.70344 3.01218 7.71972 3.03611C7.84278 3.21756 8.15722 3.21756 8.28028 3.03611C8.29656 3.01218 9.92513 0.636383 11.8333 0.636383C13.7633 0.636383 15.3333 2.36712 15.3333 4.49432C15.3333 5.49671 14.9798 6.44971 14.3382 7.17743Z" fill="white"/>
</svg>  */}
   {/* chek */}
   {/* chek */}
   {/* chek */}
                     </div>
  <img src={el.img} alt="" width="64px"   className="listLet"  height="94px" srcset="" />
  
  </div>
   <div className="svgImg"> 


  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_d_1_560)">
    <circle cx="12" cy="9" r="6" fill="#FFBE18"/>
    <circle cx="12" cy="9" r="5.75" stroke="white" stroke-width="0.5"/>
  </g>
  <path d="M17 9C17 11.7614 14.7614 14 12 14V4C14.7614 4 17 6.23858 17 9Z" fill="#B0B0B0"/>
  <defs>
    <filter id="filter0_d_1_560" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_560"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_560" result="shape"/>
    </filter>
  </defs>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_d_1_556)">
    <circle cx="12" cy="9" r="6" fill="#FFBE18"/>
    <circle cx="12" cy="9" r="5.75" stroke="white" stroke-width="0.5"/>
  </g>
  <defs>
    <filter id="filter0_d_1_556" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_556"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_556" result="shape"/>
    </filter>
  </defs>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g filter="url(#filter0_d_1_558)">
    <circle cx="12" cy="9" r="6" fill="#B0B0B0"/>
    <circle cx="12" cy="9" r="5.75" stroke="white" stroke-width="0.5"/>
  </g>
  <defs>
    <filter id="filter0_d_1_558" x="0" y="0" width="24" height="24" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="3"/>
      <feGaussianBlur stdDeviation="3"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_558"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_558" result="shape"/>
    </filter>
  </defs>
</svg>  </div>
   <div className="tvyal2">
                   <p> CustomName </p>
                 
                     Bracelet
                 
                
                   </div>    <div className="price"  key={el.id}>{el.price}.00$ <Button sx={{
                      // marginTop: "15px",
                      // marginRight:"55px",
                      position:"absolute",
                      top:"5px",
                      left:"28px",
                      color: "#B0B0B0",
                      fontFamily: "Montserrat",
                      fontSize: "12px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "normal",
                      textDecorationLine: "underline",
                      textTransform: "capitalize",
                   }} onClick={()=>{
                    handleOpen1()
                   }}><p className="see" >see more</p></Button></div>
                     </div>}
                       </button> 
                          </>
                        )
                       })}
                     </div>
                    
            </div>


            <Button onClick={handleOpen} className="changeBelt">Change belt</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="beltTypography">
                   Belt
            </div>
       
    <div className="closeModal" >
      <Button onClick={()=>{

 handleClose()

          }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14.304 1.29449L1.66162 14.2654" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.66162 1.29449L14.304 14.2654" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> </Button>
    </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className="modalImgs"> {
          beltList?.map((el)=>{
            return(
  <>
<button className="modalBtn"  key={el.id} onClick={()=>{
  setSearchParams({
    "belt1":el.id
  })
  setBeltImg(el.img)
}}>
  {searchParams.get("belt1") == el.id?<div className="modalImg" style={{borderRadius:"5px",background:"#202226", boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.25)"
 }}>         <img src={el.img} alt="" width="60px" height="60px"  style={{borderRadius:"150px"}}srcset="" />
              
               <div className="BeltTvyal"  key={el.id}>
                <p>{el.title}</p>
                <p className="p">200,00$</p>
               </div>
          
</div>:<div className="modalImg">         <img src={el.img} alt="" width="60px" height="60px"  style={{borderRadius:"150px"}}srcset="" />
              
               <div className="BeltTvyal">
                <p>{el.title}</p>
                <p className="p">200,00$</p>
               </div>
          
</div> }



               
          
 </button>
      </>
            )
          })
        }</div>
           <div className="modalImgs"> {
          beltList?.map((el)=>{
            return(
  <>
<button   key={el.id}  className="modalBtn" onClick={()=>{
  setSearchParams({
    "belt2":el.id
  
  }) 
  setBeltImg(el.img)
}}>
  {searchParams.get("belt2") == el.id?<div className="modalImg" style={{borderRadius:"5px",background:"#202226", boxShadow: "0px 0px 15px 2px rgba(0, 0, 0, 0.25)"
 }}>         <img src={el.img} alt="" width="60px" height="60px"  style={{borderRadius:"150px"}}srcset="" />
              
               <div className="BeltTvyal">
                <p>{el.title}</p>
                <p className="p">200,00$</p>
               </div>
          
</div>:<div className="modalImg">         <img src={el.img} alt="" width="60px" height="60px"  style={{borderRadius:"150px"}}srcset="" />
              
               <div className="BeltTvyal">
                <p>{el.title}</p>
                <p className="p">200,00$</p>
               </div>
          
</div> }



               
          
 </button>
      </>
            )
          })
        }</div>
          </Typography>
        </Box>
      </Modal>

<div className="glavBelt">
  <div className="beltImg">
  <div className="refresh" onClick={()=>{
    setLettersBelt([])
    setTp()
    setBeltImg()
  }}>
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
<path d="M1 1.99072V7.99072H7" stroke="white" stroke-opacity="0.55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.51 12.9907C4.15839 14.831 5.38734 16.4109 7.01166 17.492C8.63598 18.5732 10.5677 19.0973 12.5157 18.9851C14.4637 18.873 16.3226 18.1308 17.8121 16.8704C19.3017 15.61 20.3413 13.8996 20.7742 11.997C21.2072 10.0944 21.0101 8.10263 20.2126 6.32177C19.4152 4.54091 18.0605 3.06747 16.3528 2.12344C14.6451 1.17941 12.6769 0.815934 10.7447 1.08779C8.81245 1.35964 7.02091 2.25209 5.64 3.63067L1 7.99067" stroke="white" stroke-opacity="0.55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div className="gotis">
  <img src="https://s3-alpha-sig.figma.com/img/f029/1e6a/44c12e180c6a8701c6f963fa296a4431?Expires=1698019200&Signature=P8r4CIO3UcVqOzuiyecWxWMVLwnyUHHYMSfzpsj~rpKhIWj~kDer1pUuPaIzNhjw1ug2eXgfjtP2XumzUZ1QBooN4Da8FMEj52G2f9dmQ1IuhaqBzK5ZANIbFH~BP~-RuDW-61SPGBMNzzlvTGWBEuYdeAhfyvW2VKYJFIWX5a9HDit3ap7YJa0is5oBttXJ9oRj8-V9i50TzwFIJxIlZJGvX0jNazCTLtLlzM4MWXAkUxpOOlqHn6-Vj1lrUIwYqCByjJExW4LUVap~TyZZZ3vG3793tTZyxFIaxh0Kt1NM3-rq3cuXwsCHrSQoyijUdMG22rdNS0aRZPQxp~dlFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" width="70%" alt="" />

</div>
<div className="goti">
  <img src={beltImg}
 alt=""  width="100%"/>
</div>
  </div></div> <div className="lettersBeltGlav">

  {
    lettersBelt?.map((el)=>{
      return(
        <>
       
       <div className="lettersBeltMin"  key={el.id * 150}>

   
          <img src={el.img} width="35px" height="25px" alt="" />
       </div>
        </>
      )
    })


  } 
    
<div className="border"> 
<div className="belt400">
  <>
  {lettersBelt.length>0?<> <span className="priceSpan" >Belt price:</span>400,00 $ </> :<> <span className="priceSpan" >Belt price:</span> </> }
 </>

</div>
<div className="listImg">
  {lettersBelt?.map((el)=>{
  //  sum1 = 0s
    // sum1+=el.price
    // setSum1(el.price)
  //  { sum1+=el.price}
   return(
    <>
   <div className="listImgBorder" key={el.id}>

  <div className="delList"onClick={()=>{
    handleDelList(el.price)
  }}>


  
  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
  <g opacity="0.55">
    <path d="M7 1L1 7" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1 1L7 7" stroke="white" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg> 
  </div>
      <img src={el.img} width="25px" alt="" />
      <div className="priceList">
       {el.price1}.00$
      </div>
     </div>
    
  </> ) 
  })}</div>
  <div className="listBorder">
    
  </div>
  <div className="listBorder">

  </div>
  <div className="listBorder">

  </div>
  <div className="listBorder">

  </div>
  <div className="listBorder">

  </div>
  <div className="listBorder">

  </div>
  <div className="listBorder">

  </div>
  <div className="listBorder">

  </div>
  <div className="listBorder">

  </div>
  <div className="sum">

  </div>
</div>
 <div className="totalPrice">
 total price: {tp}$

 <div className="addBag" onClick={()=>{
   
   
      // dispatch
      lettersBelt.map((el)=>{
        let parentId = Math.round(Math.random()*6500)

        
    setDataBag( {
              
              priceList:[
              
              ],
              parentId:parentId,
           lettersImg:[
 
           ],
              beltImg:beltImg
    
        })
        dataBag.lettersImg.push(el.img)
        dataBag.priceList.push(el.price1)
       
         
     
      }) 
  
           dispatch(addBag(dataBag)).then(()=>{
            console.log(typeof dataBag , "type Data BAg" );
          dispatch(getBag())
        })    
       
          setTimeout(() => {  
             setBeltImg()
              setLettersBelt([])
      setTp()
          }, 1500); 
 }}>
 Add  to bag
 </div>
     </div>
      </div>




      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <div className="closeSeeModal" onClick={()=>{
            handleClose1()
          }}>
   
         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
  <path d="M13.2949 1.87476L1.29492 13.8748" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.29492 1.87476L13.2949 13.8748" stroke="#B0B0B0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      
          {Array.isArray(lettersList)  && lettersList?.map((el ,ind)=>{
        return(
          <>
          {el.id == searchParams.get("lettersId")  ||  el.id == searchParams.get("lettersId1")? <>
          <div className="lettersId2">
         <div className="seeModalImgDiv">
        <img src={el.img} width="120px" alt="" />  
         </div>
            <div className="textModalSee">
              <div className="custom">
              Custom Name Bracelet
              </div>
              <div className="seePrice">
                {el.price}.00$
              </div>
              <div className="loremSee">
    Lmquam accusamus quisquam alias vitae clorem 
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus illo blanditiis est accusantium, nulla magnam facere quo? Magni, consectetur voluptates itaque voluptatum, nihil commodi nemo a voluptatibus unde eos culpa!
     onsectetur a asperiores illo eligendi, unde incidunt dolorum. Natus, deserunt ratione et perspiciatis rem vitae nesciunt? placeat neque, ea ipsa numquam enim ducimus dolores! Atque aliquid ipsa explicabo!
              </div>
            </div>
         </div> 
         <div className="childImgs">
          <div className="chilImg">
              <img src={el.img} width="25px" alt="" />
          </div>
          <div className="chilImg">
              <img src={el.img} width="25px" alt="" />
          </div>
          <div className="chilImg">
              <img src={el.img} width="25px" alt="" />
          </div>
      
        
         </div>
         </> :null}
          </>
        )
      })}
          </Typography>
        </Box>
      </Modal>

         </div>
      
      </>
   )
}