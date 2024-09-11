export const environment = {
    production: false,
    authorized_uri: 'http://localhost:9000/oauth2/authorize?',
    client_id: 'client',
    redirect_uri: 'http://127.0.0.1:4200/authorized',
    scope: 'openid profile',
    response_type: 'code',
    response_mode: 'form_post',
    code_challenge_method: 'S256',
    code_challenge: 'nYj265odKbrvyld8kxovZqAE6hnCuSUuhMnwXXSjq3w',
    code_verifier: 'CE5SxaQv8clIx5DDb9xrkTpKlrCInLAvaDJInUoQtw6',
    token_url: 'http://localhost:9000/oauth2/token',
    grant_type: 'authorization_code'
};