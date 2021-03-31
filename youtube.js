const {google} = require('googleapis');
var OAuth2 = google.auth.OAuth2;


const SCOPES = ['https://www.googleapis.com/auth/youtube'];
const Auth = {}
const Credentials = {}


class YouTube{

    constructor(){
        /*let clientSecret = Auth.installed.client_secret;
        let clientId = Auth.installed.client_id;
        let redirectUrl = Auth.installed.redirect_uris[0];
        this.oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);
        this.oauth2Client.credentials = Credentials;*/
        this.youtube = google.youtube({
            version: 'v3',
            auth: '',
          });
    }

    getChannel() {
        this.youtube.channels.list({
          auth: this.oauth2Client,
          part: 'snippet,contentDetails,statistics',
          forUsername: 'GoogleDevelopers'
        }, function(err, response) {
          if (err) {
            console.log('The API returned an error: ' + err);
            return;
          }
          var channels = response.data.items;
          if (channels.length == 0) {
            console.log('No channel found.');
          } else {
            console.log('This channel\'s ID is %s. Its title is \'%s\', and ' +
                        'it has %s views.',
                        channels[0].id,
                        channels[0].snippet.title,
                        channels[0].statistics.viewCount);
          }
        });
      }

      async buscarVideo(nombre) {
        const res = await this.youtube.search.list({
          part: 'id,snippet',
          q: nombre,
          maxResults: 1,
          type: 'video',
        });
        console.log(res.data.items);
        return res.data.items[0];
      }
}


module.exports = new YouTube();