export const SpotifyEmbed = ({
  link,
  style = {},
  wide = false,
  width = wide ? '100%' : 300,
  height = wide ? 80 : 380,
  frameBorder = 0,
  allow = 'encrypted-media',
  ...props
}) => {
  /* console.log('SpotifyEmbed link: ' + link); */
  const url = new URL(link);
  /* console.log('URL: ' + url.pathname); */
  // https://open.spotify.com/track/1KFxcj3MZrpBGiGA8ZWriv?si=f024c3aa52294aa1
  // https://open.spotify.com/episode/6417a917dbd85879ba32fc36
  // /episode/6417a917dbd85879ba32fc36
  return (
    <iframe
      title='Spotify Web Player'
      src={`https://open.spotify.com/embed${url.pathname}`}
      width={width}
      height={height}
      frameBorder={frameBorder}
      allow={allow}
      style={{
        borderRadius: 8,
        ...style,
      }}
      {...props}
    />
  );
};
