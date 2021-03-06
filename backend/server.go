package main

import (
	"context"
	"encoding/json"
	"github.com/go-chi/chi/v5"
	"github.com/google/go-github/v38/github"
	"net/http"
	"os"
)

type gitInfo struct{
	Action string `json:"action"`
	Repo   string `json:"repo"`
}

func githubStuff() []gitInfo {
	client := github.NewClient(nil)

	acts, _, err := client.Activity.ListEventsPerformedByUser( context.Background(), "Azanul", true, nil)
	if err!=nil{
		println("Error getting activity: ", err.Error())
		return []gitInfo{{Action: "None", Repo: "None"}}
	}

	info := make([]gitInfo, 5)
	for i, act := range acts[:5] {
		info[i].Action = act.GetType()
		info[i].Repo = (*act.GetRepo().Name)[7:]
	}
	println(info)
	return info
}


func main()  {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}

	r := chi.NewRouter()
	FileServer(r)
	r.Get("/gitInfo", getGit)

	err := http.ListenAndServe(":"+port, r)
	if err != nil {
		return 
	}
}

func FileServer(router *chi.Mux) {
	root := "./build"
	fs := http.FileServer(http.Dir(root))

	router.Get("/*", func(w http.ResponseWriter, r *http.Request) {
		if _, err := os.Stat(root + r.RequestURI); os.IsNotExist(err) {
			http.StripPrefix(r.RequestURI, fs).ServeHTTP(w, r)
		} else {
			fs.ServeHTTP(w, r)
		}
	})
}

func getGit(w http.ResponseWriter, r *http.Request){
	w.Header().Set("Content-Type", "application/json")
	err := json.NewEncoder(w).Encode(githubStuff())
	if err != nil {
		return
	}
}

//func cors(h http.HandlerFunc) http.HandlerFunc {
//	return func(w http.ResponseWriter, r *http.Request) {
//		w.Header().Set("Access-Control-Allow-Origin", "*")
//		w.Header().Set("Access-Control-Allow-Methods", "*")
//		w.Header().Set("Access-Control-Allow-Headers", "*")
//		h(w, r)
//	}
//}