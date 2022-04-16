import { toast } from 'react-toastify';

const config = { position: toast.POSITION.BOTTOM_RIGHT };

const notifySuccess = (msg) => toast.success(msg, config);
const notifyWarning = (msg) => toast.warning(msg, config);
const notifyError = (msg) => toast.error(msg, config);

export { notifySuccess, notifyWarning, notifyError };
