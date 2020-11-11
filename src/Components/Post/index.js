import React, { useState } from "react";
import "./index.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import firebase, {db} from "./../Firebase/firebase";
import { useSelector } from 'react-redux';

const Post = () => {

  const user = useSelector((state) => state.currentUser);

  const [post, setPost] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    location: "",
    name: "",
    phoneNumber: "",
  });

  const random = Math.floor(Math.random() * 10000);

  const [condition, setCondition] = useState("");

  const handleTypeClick = (e) => {
    setCondition(e.target.value)
  };

  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (e) => {
      const image = e.target.files[0];
      setPhoto(image);
  };

  const addItemsToDatabase = (e) => {
    e.preventDefault();

    const upload = firebase
    .storage()
    .ref("images/" + photo.name)
    .put(photo);

    upload.on('state_changed', snap => {
      console.log('snap', snap);
    }, error => console.log(error), () => {
      firebase
      .storage()
      .ref("images")
      .child(photo.name)
      .getDownloadURL()
      .then((url) => {
        db.ref("items/").push({
          name: post.name,
          title: post.title,
          description: post.description,
          price: post.price,
          photo: url,
          phoneNumber: post.phoneNumber,
          location: post.location,
          category: post.category,
          condition,
          room: user.uid + random,
        });
      });
    })
    setPost({
      name: '',
      title: '',
      category: '',
      location: '',
      price: '',
      description: '',
      phoneNumber: '',
      type: ''
    })
  };

  function handleChange(event) {
    const { name, value } = event.target;

    setPost((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  
    return (
    <div className="post">
      <div>
        <h2>POST YOUR AD</h2>
      </div>
      <div className="post_content">
        <form>
          <div>
            <h3>SELECTED CATEGORY</h3>
            <select
              onChange={handleChange}
              name="category"
              value={post.category}
            >
              <option>Select Category</option>
              <option>Mobile Phones</option>
              <option>Cars</option>
              <option>Motorcycles</option>
              <option>Houses</option>
              <option>Tv-audio-video</option>
              <option>Tablets</option>
              <option>Land and plots</option>
            </select>
          </div>
          <div>
            <div>
              <h3>INCLUDE SOME DETAILS</h3>
              <span>Make*</span>
              <br />
              <select onChange={handleChange} name="type" value={post.type}>
                <option>Select Category</option>
                <option>Huawei</option>
                <option>Apple</option>
                <option>Samsung</option>
                <option>Oppo</option>
                <option>Infinix</option>
              </select>
            </div>
            <div>
              <span>Condition*</span>
              <br />
              <button
                onClick={(e) => handleTypeClick(e)}
                type="button"
                name="condition"
                value="New"
              >
                New
              </button>
              <button
                onClick={(e) => handleTypeClick(e)}
                type="button"
                name="condition"
                value="Used"
              >
                Used
              </button>
            </div>
            <div>
              <span>Ad title</span>
              <br />
              <input
                onChange={handleChange}
                name="title"
                value={post.title}
              ></input>
            </div>
            <div>
              <span>Description</span>
              <br />
              <textarea
                onChange={handleChange}
                name="description"
                value={post.description}
              ></textarea>
            </div>
            <div></div>
          </div>
          <div>
            <h3>SET A PRICE</h3>
            <span>Price</span>
            <br />
            <input
              onChange={handleChange}
              name="price"
              value={post.price}
            ></input>
          </div>
          <div>
            <h3>Upload upto 12 photos</h3>
            <div>
              <div>
                <input
                  onChange={handlePhotoChange}
                  className="hide"
                  type="file"
                ></input>
                <AddAPhotoIcon className="image_icon" />
              </div>
              <div>
                <input name="photo" className="hide" type="file"></input>
                <AddAPhotoIcon className="image_icon" />
              </div>
              <div>
                <input name="photo" className="hide" type="file"></input>
                <AddAPhotoIcon className="image_icon" />
              </div>
              <div>
                <input name="photo" className="hide" type="file"></input>
                <AddAPhotoIcon className="image_icon" />
              </div>
              <div>
                <input name="photo" className="hide" type="file"></input>
                <AddAPhotoIcon className="image_icon" />
              </div>
              <div>
                <input name="photo" className="hide" type="file"></input>
                <AddAPhotoIcon className="image_icon" />
              </div>
              <div>
                <input name="photo" className="hide" type="file"></input>
                <AddAPhotoIcon className="image_icon" />
              </div>
              <div>
                <input name="photo" className="hide" type="file"></input>
                <AddAPhotoIcon className="image_icon" />
              </div>
              <div>
                <input name="photo" className="hide" type="file"></input>
                <AddAPhotoIcon className="image_icon" />
              </div>
              <div>
                <input name="photo" className="hide" type="file"></input>
                <AddAPhotoIcon className="image_icon" />
              </div>
              <div>
                <input name="photo" className="hide" type="file"></input>
                <AddAPhotoIcon className="image_icon" />
              </div>
              <div>
                <input name="photo" className="hide" type="file"></input>
                <AddAPhotoIcon className="image_icon" />
              </div>
            </div>
          </div>
          <div>
            <h3>CONFIRM YOUR LOCATION</h3>
            <span>Location</span>
            <br />
            <select
              onChange={handleChange}
              name="location"
              value={post.location}
            >
              <option>Select location</option>
              <option>Punjab</option>
              <option>Sindh</option>
              <option>Kpk</option>
              <option>Azad Kashmir</option>
              <option>Balochistan</option>
            </select>
          </div>
          <div>
            <h3>REVIEW YOUR DETAILS</h3>
            <span>Name</span>
            <br />
            <input
              onChange={handleChange}
              name="name"
              value={post.name}
              type="text"
            ></input>
            <br />
            <span>Mobile Phone Number</span>
            <br />
            <input
              onChange={handleChange}
              name="phoneNumber"
              value={post.phoneNumber}
              type="text"
            ></input>
          </div>
          <div>
            <button onClick={addItemsToDatabase}>Post now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
