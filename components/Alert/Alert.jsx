import Swal from 'sweetalert2'

const Alert = (title, icon, message) => {
  Swal.fire({
      title: title,
      icon: icon,        
      text: message
    });
}

export default Alert