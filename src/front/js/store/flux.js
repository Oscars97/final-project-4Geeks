const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
			posts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => {
						setStore({ users: data.users });
					})
					.catch(error => {
						return error;
					});
			},

			getPosts: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/posts")
					.then(resp => resp.json())
					.then(data => {
						setStore({ posts: data.posts });
					})
					.catch(error => error);
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
