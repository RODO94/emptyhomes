import { MenuItem, Select } from "@mui/material";
import { useBoroughStore } from "../../store";
import { emptyData } from "../../data/empties";
import { useFormik } from "formik";

export default function BoroughSelector() {
  const { borough, setBorough } = useBoroughStore();
  const formik = useFormik({
    initialValues: { borough },
    onSubmit: (value) => setBorough(value.borough),
  });

  console.log(borough);
  return (
    <Select
      label="Boroughs"
      value={formik.values.borough}
      onChange={formik.submitForm}
      fullWidth
    >
      {emptyData
        .filter((authority) => authority.region === "L")
        .map((borough) => (
          <MenuItem value={borough.localAuthority}>
            {borough.localAuthority}
          </MenuItem>
        ))}
    </Select>
  );
}
