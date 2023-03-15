import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Userbar = ({ session }) => {
  const supabase = useSupabaseClient()
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    avatar_url: null,
    username: '',
  });
  const [avatarUrl, setAvatarUrl] = useState(null); // Add this state variable

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase
        .from('profiles')
        .select()
        .eq('id', session.user.id)
        .single();

      if (error) {
        // eslint-disable-next-line no-console
        console.log('Error fetching user:', error);
      } else {
        setUser(data);
        if (data.avatar_url) {
          // Only download the avatar if it exists
          downloadImage(data.avatar_url);
        }
      }
    }

    fetchUser();
  }, [session]);

  async function downloadImage(path) {
    try {
      const { data, error } = await supabase.storage
        .from('avatars')
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setAvatarUrl(url);
    } catch (error) {
      console.log('Error downloading image: ', error);
    }
  }

  return (
    <>
      <div >
        <div >
        </div>
        <p>{user.username}</p>
        <p >{user.badge_level}</p>
        {avatarUrl && (
          <Link href={`/user-profile/${user.id}`}>
            <Image
              src={avatarUrl}
             
              width={60}
              height={60}
              alt="avatar"
            />
          </Link>
        )}
      </div>
      {/* <div className={styles.line}>
        <hr className={styles.hr} />
      </div> */}
    </>
  );
};

export default Userbar;