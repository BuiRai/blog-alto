/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import './PostForm.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import API from '../../utils/API';
import { DEFAULT_IMAGE_URL } from '../../constants';
import NavBar from '../../components/NavBar';

function PostFormPage() {
  const [searchParams] = useSearchParams();
  const nav = useNavigate();

  const [id, setId] = useState(searchParams.get('id'));
  const [name, setName] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (id) {
      const data = API.getItemById(parseInt(id, 10));
      setId(parseInt(id, 10));
      setName(data?.name);
      setShortDescription(data?.shortDescription);
      setContent(data?.content);
      setImageUrl(data?.imageUrl);
    }
  }, []);

  const onSave = () => {
    const post = {
      id,
      name,
      imageUrl,
      shortDescription,
      content,
    };
    API.saveItem(post);
    nav('/list');
  };

  return (
    <>
      <NavBar />
      <div className="post-form-container">
        <h3 className="title">{id ? 'Update Post' : 'Create Post'}</h3>

        <div className="form-container">
          <div className="field-container">
            <span>Name</span>
            <input
              id="form-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="field-container">
            <span>Image URL</span>
            <input
              id="form-image-url"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <div className="preview-image">
            <img
              src={imageUrl || DEFAULT_IMAGE_URL}
              alt="previewImage"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = DEFAULT_IMAGE_URL;
              }}
            />
          </div>

          <div className="field-container">
            <span>Short Description</span>
            <textarea
              id="form-description"
              rows="3"
              type="text"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </div>

          <div className="field-container">
            <span>Content (HTML)</span>
            <textarea
              id="form-description"
              rows="10"
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <button onClick={onSave} type="submit">
            {id ? 'Update' : 'Create'}
          </button>
        </div>
      </div>
    </>
  );
}

export default PostFormPage;
