import {CardWrapper, UserList, UserItem, Line, Logo, Image, ImageWrapper, Tweets, Followers, Button, WrapperTop, WrapperBottom} from "./UserGallery.styled"
import logo from "../../images/Logo-min.png"
import PropTypes from 'prop-types';
import useLocalStorage from "../../utils/useLocalStorage";

export const UserGallery = ({users}) => {

  const [isFollowing, setIsFollowing] = useLocalStorage("following", {});

  const toggleButton = (id) => () => {
    setIsFollowing(following => ({...following, [id]: !following[id]}));
  }

  return ( 
  <UserList >
    {users.map(({ id, user, tweets, followers, avatar }) => (
  
      <UserItem key={id} >
        <CardWrapper>
          <WrapperTop>
            <Logo> <img src={logo} alt="logo" /> </Logo>
          </WrapperTop>

          <Line />
          <ImageWrapper> <Image src={avatar} alt={user} /> </ImageWrapper>
  
          <WrapperBottom>
     
            <Tweets> {tweets} Tweets </Tweets>
            <Followers> {isFollowing[id] ? (followers + 1 ).toLocaleString(): followers.toLocaleString()} Followers </Followers>
            <Button onClick={toggleButton(id)} colorType={isFollowing[id]} > {isFollowing[id] ? "Following" : "Follow"} </Button>
     
          </WrapperBottom>
        </CardWrapper>
          
      </UserItem>

    ))}

  </UserList> )

}

UserGallery.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            item: PropTypes.objectOf(PropTypes.shape({
                id: PropTypes.number.isRequired,
                key: PropTypes.number.isRequired,
                user: PropTypes.string.isRequired,
                tweets: PropTypes.number.isRequired,
                followers: PropTypes.number.isRequired,
                avatar: PropTypes.string.isRequired,
            }),)
        }),
    )
}

