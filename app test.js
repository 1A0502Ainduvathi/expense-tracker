@@ -1,5 +1,18 @@
form { padding: 0 2em; max-width: 400px; margin: 0 auto; }
input, select { min-width: 200px; }
.mdc-form-field { display: block; }
.mdc-select, .mdc-form-submit { margin-top: 24px; }
.mdc-form-submit { display: flex; justify-content: space-between; }
form {
  padding: 0 2em;
  max-width: 400px;
  margin: 0 auto;
}
input, select {
  min-width: 200px;
}
.mdc-form-field {
  display: block;
}
.mdc-select, .mdc-form-submit {
  margin-top: 24px;
}
.mdc-form-submit {
  display: flex;
  justify-content: space-between;
}
