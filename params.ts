ng2 http获取数据传递参数
不同方法请求的参数如下： 
    get(url: string, options?: RequestOptionsArgs): Observable<Response>;
    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response>;
    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response>;
    delete(url: string, options?: RequestOptionsArgs): Observable<Response>;
    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response>;
    head(url: string, options?: RequestOptionsArgs): Observable<Response>;
    
    比如：
    url?: string;
    method?: string | RequestMethod;
    search?: string | URLSearchParams;
    headers?: Headers;
    body?: string;
    
    格式：
    url: "data/list.json" / "data/list.php"
    method: "get",
    search: "name=s&password=heping" | 使用URLSearchParams()对象
    headers: 使用Headers()对象设置
    body: ""
    
    
    例子:
    ```
    import { URLSearchParams } from 'angular2/http';
    let params = new URLSearchParams();
    params.set('name', 'NameSearchString');
    this.http.get(StaticSettings.BASE_URL, { search: params})
      .subscribe(
        (response) => ...,
        (error) => ...,
        () => ...
      );
