import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const userSettings = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
    padding: 15,
    fontSize: 16,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  modalView: {
    width: width * 0.7,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    marginTop: height * 0.2,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    textAlign: "center",
  },
});
