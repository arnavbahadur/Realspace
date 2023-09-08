import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { v4 } from "uuid";
import { storage } from "../../../firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import Addmultiimg from "./Addmultiimg";

const AddProperty = () => {
  const [FormData, setFormData] = useState({
    title: "",
    Description: "",
    location: "",
    property_url: "",
    created_at: "",
    propertytype: "",
    houseboximgUrl: "",
    Gallery: [],
    Nearby: [],
    Feature: [],
    Purpose: "",
    location_url: "",
    price: "",
    areaSqFt: "",
    hall: "",
    bedRoom: "",
    bathRoom: "",
    addMoreDetails: "",
    Note: "",
    Rating: "",
    CurrentStatus: "",
    balcony: "",
    totalfloor: "",
    constructionstage: "",
    dateofpossesion: "",
  });

  const [images, setimages] = useState([]);
  const afterurl = async (url) => {
    setFormData({
      ...FormData,
      houseboximgUrl: url,
    });
    alert("Image was Succesfully Updated");
  };

  //   const checking=()=>{
  //     // console.log(imageUpload);
  //     if(imageUpload.size>200000){
  //       return false;
  //     }
  // //     const fileExtension = imageUpload.name.split(".").at(-1);
  //     const allowedFileTypes = ["jpg", "png","gif","jpeg"];
  //     if (!allowedFileTypes.includes(fileExtension)) {
  //         return false;
  //     }
  //     return true;
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "Feature" || name === "Nearby") {
      const Array = value.split(",");

      setFormData({
        ...FormData,
        [name]: Array,
      });
    } else {
      setFormData({
        ...FormData,
        [name]: value,
      });
    }
  };

  // const handleChange = e => {
  //     const { name, value } = e.target
  //     setFormData({
  //         ...FormData,
  //         [name]: value
  //     })
  // }

  const fileListRef = ref(storage, "property/");

  const [imageUpload, setImageUpload] = useState(null);

  // if(!checkimg()){
  //     alert("Please Upload Valid image on 200KB");
  // }
  // else

  const uploadimage = async () => {
    // console.log("change image");
    try {
      if (imageUpload !== null) {
        const imageRef = ref(storage, "property/" + v4() + imageUpload.name);
        await uploadBytes(imageRef, imageUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            console.log(url);
            afterurl(url);
          });
        });
      } else {
        console.log("nothing");
      }
      //  console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("img change");
    uploadimage();
  }, [imageUpload]);

  async function submit() {
    try {
      // const Feature =Feature.split(',');

      await axios
        .post("/propertyapi/addproperty", FormData)
        //   Nearby = Nearby.map(item=>{
        //     Nearby= item.split(',')
        //     return Nearby
        // })
        .then(() => {
          alert("Property added successfully");
        })
        .catch((err) => {
          alert(err);
        });
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <div className="add-area add_event_area" id="add_event_area">
        <p>Add new Property</p>
        <div>
          <input type="text" id="" className="eventtitle"  placeholder="Title"  onChange={handleChange}   name="title"  value={FormData.title} />
          <input type="text" id="" className="eventtitle"  placeholder="location"  onChange={handleChange}   name="location"  value={FormData.location} />
          <input type="text" id="" className="eventtitle"  placeholder="price"  onChange={handleChange}   name="price"  value={FormData.price} />
          <input type="text" id="" className="eventtitle"  placeholder="area"  onChange={handleChange}   name="areaSqFt"  value={FormData.areaSqFt} />
          <input type="text" id="" className="eventtitle"  placeholder="propertytype"  onChange={handleChange}   name="propertytype"  value={FormData.propertytype} />
          <input type="text" id="" className="eventtitle"  placeholder="balcony"  onChange={handleChange}   name="balcony"  value={FormData.balcony} />
          <input type="text" id="" className="eventtitle"  placeholder="totalfloor"  onChange={handleChange}   name="totalfloor"  value={FormData.totalfloor} />
          <input type="text" id="" className="eventtitle"  placeholder="constructionstage"  onChange={handleChange}   name="constructionstage"  value={FormData.constructionstage} />
          <input type="text" id="" className="eventtitle"  placeholder="dateofpossesion"  onChange={handleChange}   name="dateofpossesion"  value={FormData.dateofpossesion} />
          <input type="text" id="" className="eventtitle"  placeholder="created_at"  onChange={handleChange}   name="created_at"  value={FormData.created_at} />
          <input type="text" id="" className="eventtitle"  placeholder="property_url of ifram"  onChange={handleChange}   name="property_url"  value={FormData.property_url} />
          <input type="text" id="" className="eventtitle"  placeholder="location_url of ifram"  onChange={handleChange}   name="location_url"  value={FormData.location_url} />
          <input type="text" id="" className="eventtitle"  placeholder="Purpose"  onChange={handleChange}   name="Purpose"  value={FormData.Purpose} />
          <input type="text" id="" className="eventtitle"  placeholder="bedRoom"  onChange={handleChange}   name="bedRoom"  value={FormData.bedRoom} />
          <input type="text" id="" className="eventtitle"  placeholder="hall"  onChange={handleChange}   name="hall"  value={FormData.hall} />
          <input type="text" id="" className="eventtitle"  placeholder="bathRoom"  onChange={handleChange}   name="bathRoom"  value={FormData.bathRoom} />
          <input type="text" id="" className="eventtitle"  placeholder="CurrentStatus"  onChange={handleChange}   name="CurrentStatus"  value={FormData.CurrentStatus} />
          <textarea
            id=""
            cols="10"
            rows="5"
            placeholder="property Discription"
            onChange={handleChange}
            name="Description"
            value={FormData.Description}
            required
          />
          <textarea
            id=""
            cols="30"
            rows="5"
            placeholder="Nearby place"
            onChange={handleChange}
            name="Nearby"
            value={FormData.Nearby}
            required
          />
          <textarea
            id=""
            cols="30"
            rows="5"
            placeholder="Feature"
            onChange={handleChange}
            name="Feature"
            value={FormData.Feature}
            required
          />
          <textarea
            id=""
            cols="30"
            rows="5"
            placeholder="addMoreDetails"
            onChange={handleChange}
            name="addMoreDetails"
            value={FormData.addMoreDetails}
            required
          />
          <p>Upload image :</p>
          <div className="img-upload">
            <label htmlFor="event-img">
              <i className="fa-solid fa-upload" />
            </label>
            <input
              type="file"
              name="event-img"
              accept="image/png, image/gif, image/jpeg"
              onChange={(property) => {
                setImageUpload(property.target.files[0]);
              }}
            />
          </div>

          <h4>upload Gallery images</h4>
          <p>select multiple image for gallery one by one</p>
          {/* <Addmultipleimg /> */}
          <Addmultiimg formarray={FormData.Gallery} />

          <button
            onClick={() => {
              submit();
            }}
            id="blog-txt-add"
          >
            Add
          </button>
          <button type="reset">Clear</button>
        </div>
      </div>
    </div>
  );
};
export default AddProperty;

// {/* <input type="text" id="" className='eventtitle' placeholder='Note'                  onChange={ handleChange } name="Note" value={FormData.Note}/> */}
// {/* <input type="text" id="" className='eventtitle' placeholder='price'                 onChange={ handleChange } name="price" value={FormData.price}/> */}
// {/* <input type="text" id="" className='eventtitle' placeholder='Rating'                onChange={ handleChange } name="Rating" value={FormData.Rating}/> */}
// {/* <input type="text" id="" className='eventtitle' placeholder='Feature'               onChange={ handleChange } name="Feature" value={FormData.Feature}/> */}

// Gallery,imageContainer,Photos,

// title,location,property_url, propertytype,Nearby, Gallery,  Purpose,location_url, price, areaSqFt,
//  hall, bedRoom, bathRoom,Listingyear,imageContainer,Photos,Description
//  ,addMoreDetails,Feature,Note,Rating,CurrentStatus
