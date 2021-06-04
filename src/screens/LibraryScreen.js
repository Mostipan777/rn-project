import React, {useState, useEffect, useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import Library from '../components/Meditation/Library';
import {AppContext} from '../store';

const LibraryScreen = () => {
  const {setData} = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTracks = async () => {
    const trackList = [];
    const snapshot = await firestore().collection('meditations').get();
    snapshot.forEach(doc => {
      const {id, title, subtitle, duration, uri, audio} = doc.data();
      trackList.push({
        id,
        title,
        subtitle,
        duration,
        uri,
        audio
      });
      setData(trackList);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchTracks();
  }, []);

  return <Library isLoading={isLoading}/>;
};

export default LibraryScreen;
