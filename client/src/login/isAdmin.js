import cookie from 'js-cookie';

export default function isAdmin(props) {
    return cookie.get('token') !== undefined;
}
