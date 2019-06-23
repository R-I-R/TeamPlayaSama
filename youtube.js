const {google} = require('googleapis');
var OAuth2 = google.auth.OAuth2;


const SCOPES = ['https://www.googleapis.com/auth/youtube'];
const Auth = {"installed":{"client_id":"354767734095-p816ct4s88gi30lhbhenm20o47i4oqp0.apps.googleusercontent.com","project_id":"teamplaya-sama","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"k1reKMFq0A6_XMEB5ZcYGky4","redirect_uris":["urn:ietf:wg:oauth:2.0:oob","http://localhost"]}}
const Credentials = {"access_token":"ya29.Glt3BjydA_iWFoQ0mi8mX8okmo7wxssyMqC_tmCtnVDit0FzRc6Le_pu_0fn5TY6CNw0r9s_B53hSdZ2Myod0ifBRRIqkwEqcL0gJrgbegGxSpbWGzWgrTU0a00v","refresh_token":"1/pp0kyKrnJUkMHhBR66efmcK8afAIyWsCkjiAq4psemzX1MYDhsXmLC2VddYQnpTS","scope":"https://www.googleapis.com/auth/youtube","token_type":"Bearer","expiry_date":1545194307101};


class YouTube{

    constructor(){
        /*let clientSecret = Auth.installed.client_secret;
        let clientId = Auth.installed.client_id;
        let redirectUrl = Auth.installed.redirect_uris[0];
        this.oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);
        this.oauth2Client.credentials = Credentials;*/
        this.youtube = google.youtube({
            version: 'v3',
            auth: 'AIzaSyC05N0fZ8Z1vTNMpgN581VVWUkHu5f8SG0',
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