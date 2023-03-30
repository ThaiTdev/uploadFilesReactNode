import FormData from "form-data";
import { accountServices } from "../_services/AccountService";

const UploadImage = () => {
  let formData = "";

  async function handleChangeAvatar(e) {
    formData = new FormData();
    formData.append("avatar", e.target.files[0]);
  }

  function handleClick() {
    try {
      accountServices
        .upload(formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })

        .then((res) => console.log("Success ", res.data.message));
      if (formData.get("avatar")) {
        console.log("La valeur de 'avatar' est:", formData.get("avatar"));
      } else {
        console.log("Il n'y a pas de valeur pour 'avatar'");
      }
    } catch (error) {}
  }

  return (
    <div>
      <form onClick={handleClick}>
        <input
          type="file"
          name="avatar"
          id="avatar"
          accept=".png,.jpeg,.jpg"
          onChange={handleChangeAvatar}
          required
        />
        <button type="submit">cliquez ici</button>
      </form>
    </div>
  );
};
export default UploadImage;
