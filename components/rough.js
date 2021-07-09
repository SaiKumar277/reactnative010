GoogleSignin.configure({
  // Mandatory method to call before calling signIn()
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  // Repleace with your webClientId
  // Generated from Firebase console
  webClientId: '88838102565-vto2f6pmq2tniekqqjfasc3a5dgh4kgd.apps.googleusercontent.com',
});
database().ref('/users').on('value', (snapshot) => {
  const userObj = snapshot.val();
   console.log('User email: ', userObj.email);
   this.setState({name : userObj.name})
   this.setState({avatar: userObj.email})
  
 });

 function readUserData() {
  database().ref('users/-M_pZiNQbyU4AfspEGnM').once('value', function (snapshot) {
      //console.log(snapshot.val())
      name=snapshot.val();
      console.log(name);
  });
  return name;
}

React.useEffect(() => {
  const userRef = database().ref('/users');
  const OnLoadingListener = userRef.on('value', (snapshot) => {
    setUsers([]);
    snapshot.forEach(function (childSnapshot) {
      setUsers((users) => [...users, childSnapshot.val()]);
    });
  });
  const childRemovedListener = userRef.on('child_removed', (snapshot) => {
    // Set Your Functioanlity Whatever you want.
    alert('Child Removed');
  });

  const childChangedListener = userRef.on('child_changed', (snapshot) => {
    // Set Your Functioanlity Whatever you want.
    alert('Child Updated/Changed');
  });

  return () => {
    userRef.off('value', OnLoadingListener);
    userRef.off('child_removed', childRemovedListener);
    userRef.off('child_changed', childChangedListener);
  };
}, []);

<Content padder>
{users.map((item, index) => (
  <ListItem icon>
    <Body>
      <Text>
        {'Name : '}
        {item.Name}
      </Text>
      <Text>
        {'Position : '}
        {item.Position}
      </Text>
    </Body>
  </ListItem>
))}
</Content>
 style={styles.container}

       
 <DrawerItemList {...props} />

 <Button
 title="Google Sign-In"
 btnType="google"
 color="#de4d41"
 backgroundColor="#f5e7ea"
 onPress={() =>googlelogin().then(() => console.log('Signed in with Google!'))}
 
/>
<Button
   title="Facebook Sign-In"
   color="#de4d41"
   backgroundColor="#f5e7ea"
   // onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
   onPress={() =>fblogin().then(() => console.log('Signed in with Facebook!'))}
 />