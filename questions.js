// ============================================================
// QUESTION BANK - PRN232
// Format mỗi câu hỏi:
// {
//   id: number,
//   chapter: "Ch01" | "Ch02" | ... | "Ch10",
//   en: "Question in English",
//   vi: "Câu hỏi bằng tiếng Việt",
//   options: [
//     { label: "A", en: "Option A in English", vi: "Đáp án A tiếng Việt" },
//     { label: "B", en: "...", vi: "..." },
//     { label: "C", en: "...", vi: "..." },
//     { label: "D", en: "...", vi: "..." },
//   ],
//   answer: "A",  // label của đáp án đúng
//   explanation: "Giải thích bằng tiếng Việt (kiểu lập trình viên)"
// }
// ============================================================

const questions = [
  // ── CHAPTER 01 ──────────────────────────────────────────
  {
    id: 1,
    chapter: "Ch01",
    en: "What does REST stand for?",
    vi: "REST là viết tắt của cụm từ nào?",
    options: [
      { label: "A", en: "Representational State Transfer", vi: "Representational State Transfer" },
      { label: "B", en: "Remote Execution Service Technology", vi: "Remote Execution Service Technology" },
      { label: "C", en: "Reliable Stateless Transaction", vi: "Reliable Stateless Transaction" },
      { label: "D", en: "Resource Endpoint State Transfer", vi: "Resource Endpoint State Transfer" },
    ],
    answer: "A",
    explanation: "REST = Representational State Transfer. Đây là kiến trúc thiết kế API dựa trên giao thức HTTP, trong đó mỗi request chứa đủ thông tin để server xử lý mà không cần lưu trạng thái (stateless). Client tương tác với resource thông qua các HTTP method: GET, POST, PUT, DELETE."
  },
  {
    id: 2,
    chapter: "Ch01",
    en: "Which HTTP method is typically used to retrieve a resource in a RESTful API?",
    vi: "HTTP method nào thường được dùng để lấy dữ liệu trong RESTful API?",
    options: [
      { label: "A", en: "POST", vi: "POST" },
      { label: "B", en: "GET", vi: "GET" },
      { label: "C", en: "PUT", vi: "PUT" },
      { label: "D", en: "DELETE", vi: "DELETE" },
    ],
    answer: "B",
    explanation: "GET dùng để đọc dữ liệu — không có side effect (idempotent + safe). POST = tạo mới, PUT = cập nhật toàn bộ, PATCH = cập nhật một phần, DELETE = xoá. Nhớ theo quy tắc CRUD: Create→POST, Read→GET, Update→PUT/PATCH, Delete→DELETE."
  },
  {
    id: 3,
    chapter: "Ch01",
    en: "In ASP.NET Core, which attribute marks a class as a Web API controller?",
    vi: "Trong ASP.NET Core, attribute nào đánh dấu một class là Web API controller?",
    options: [
      { label: "A", en: "[Controller]", vi: "[Controller]" },
      { label: "B", en: "[ApiController]", vi: "[ApiController]" },
      { label: "C", en: "[Route]", vi: "[Route]" },
      { label: "D", en: "[HttpGet]", vi: "[HttpGet]" },
    ],
    answer: "B",
    explanation: "[ApiController] là attribute chuyên dùng cho Web API — nó tự động xử lý model validation (trả 400 nếu invalid), binding source inference (tự biết [FromBody]/[FromRoute]), và Problem Details response. Nếu chỉ dùng [Controller] thì là MVC controller thông thường."
  },

  // ── CHAPTER 02 ──────────────────────────────────────────
  {
    id: 4,
    chapter: "Ch02",
    en: "What is Entity Framework Core?",
    vi: "Entity Framework Core là gì?",
    options: [
      { label: "A", en: "A JavaScript ORM for Node.js", vi: "Một ORM JavaScript cho Node.js" },
      { label: "B", en: "A cross-platform ORM for .NET that enables working with databases using .NET objects", vi: "Một ORM đa nền tảng cho .NET, cho phép làm việc với database bằng .NET objects" },
      { label: "C", en: "A SQL query builder without object mapping", vi: "Một SQL query builder không có object mapping" },
      { label: "D", en: "A NoSQL database engine", vi: "Một database engine NoSQL" },
    ],
    answer: "B",
    explanation: "EF Core là ORM (Object-Relational Mapper) — nó ánh xạ giữa C# class (entity) và bảng trong database. Thay vì viết SQL thủ công, bạn thao tác với object bình thường, EF Core tự sinh SQL. Hỗ trợ nhiều DB: SQL Server, PostgreSQL, SQLite, MySQL..."
  },
  {
    id: 5,
    chapter: "Ch02",
    en: "Which method in EF Core is used to save changes to the database?",
    vi: "Phương thức nào trong EF Core dùng để lưu thay đổi xuống database?",
    options: [
      { label: "A", en: "CommitAsync()", vi: "CommitAsync()" },
      { label: "B", en: "SaveChanges() / SaveChangesAsync()", vi: "SaveChanges() / SaveChangesAsync()" },
      { label: "C", en: "Flush()", vi: "Flush()" },
      { label: "D", en: "Submit()", vi: "Submit()" },
    ],
    answer: "B",
    explanation: "SaveChangesAsync() là bước cuối trong Unit of Work pattern của EF Core. Tất cả thay đổi (Add, Update, Remove) được tracked trong DbContext, chỉ khi gọi SaveChangesAsync() thì EF Core mới sinh SQL và commit xuống database. Luôn dùng async version để tránh block thread."
  },

  // ── CHAPTER 03 ──────────────────────────────────────────
  {
    id: 6,
    chapter: "Ch03",
    en: "What is Content Negotiation in Web API?",
    vi: "Content Negotiation trong Web API là gì?",
    options: [
      { label: "A", en: "The process of compressing HTTP responses", vi: "Quá trình nén HTTP response" },
      { label: "B", en: "The mechanism by which client and server agree on the format of the response (e.g., JSON or XML)", vi: "Cơ chế để client và server thống nhất định dạng response (JSON hoặc XML)" },
      { label: "C", en: "Authentication between client and server", vi: "Xác thực giữa client và server" },
      { label: "D", en: "Caching strategy for API responses", vi: "Chiến lược cache cho API response" },
    ],
    answer: "B",
    explanation: "Content Negotiation: client gửi header 'Accept: application/json' hoặc 'Accept: application/xml', server đọc header đó và trả về đúng format. Trong ASP.NET Core, mặc định chỉ hỗ trợ JSON. Thêm XML bằng AddXmlSerializerFormatters() trong Program.cs."
  },

  // ── CHAPTER 04 ──────────────────────────────────────────
  {
    id: 7,
    chapter: "Ch04",
    en: "In ASP.NET Core, what does [FromBody] attribute do?",
    vi: "Trong ASP.NET Core, attribute [FromBody] có tác dụng gì?",
    options: [
      { label: "A", en: "Reads parameter value from the URL route", vi: "Đọc giá trị parameter từ URL route" },
      { label: "B", en: "Reads parameter value from the query string", vi: "Đọc giá trị parameter từ query string" },
      { label: "C", en: "Reads parameter value from the HTTP request body", vi: "Đọc giá trị parameter từ HTTP request body" },
      { label: "D", en: "Reads parameter value from request headers", vi: "Đọc giá trị parameter từ request headers" },
    ],
    answer: "C",
    explanation: "[FromBody] = đọc từ body của HTTP request (thường là JSON). Các binding source khác: [FromRoute] = từ URL path (/api/items/{id}), [FromQuery] = từ query string (?page=1), [FromHeader] = từ HTTP header, [FromForm] = từ form data. Khi dùng [ApiController], binding source thường được tự suy luận."
  },
  {
    id: 8,
    chapter: "Ch04",
    en: "Which attribute is used to define a route template for a controller action in ASP.NET Core?",
    vi: "Attribute nào dùng để định nghĩa route template cho controller action trong ASP.NET Core?",
    options: [
      { label: "A", en: "[HttpGet(\"template\")]", vi: "[HttpGet(\"template\")]" },
      { label: "B", en: "[Endpoint]", vi: "[Endpoint]" },
      { label: "C", en: "[Path]", vi: "[Path]" },
      { label: "D", en: "[Url]", vi: "[Url]" },
    ],
    answer: "A",
    explanation: "Route template được đặt trực tiếp trong HTTP method attributes: [HttpGet(\"{id}\")], [HttpPost(\"create\")], [HttpPut(\"{id}\")]. Ngoài ra còn có [Route] ở cấp controller để đặt base route. Convention-based routing (dùng MapControllerRoute) thường dùng cho MVC, còn attribute routing thường dùng cho Web API."
  },

  // ── CHAPTER 05 ──────────────────────────────────────────
  {
    id: 9,
    chapter: "Ch05",
    en: "What does OData stand for?",
    vi: "OData là viết tắt của cụm từ nào?",
    options: [
      { label: "A", en: "Open Data Protocol", vi: "Open Data Protocol" },
      { label: "B", en: "Object Data Access", vi: "Object Data Access" },
      { label: "C", en: "Optimized Data Transfer", vi: "Optimized Data Transfer" },
      { label: "D", en: "Online Data API", vi: "Online Data API" },
    ],
    answer: "A",
    explanation: "OData = Open Data Protocol. Là chuẩn mở do Microsoft phát triển, cho phép client tự query data qua URL: $filter (lọc), $select (chọn field), $orderby (sắp xếp), $top/$skip (phân trang), $expand (join). Thay vì viết nhiều endpoint khác nhau, chỉ cần 1 endpoint OData là client tự lọc được."
  },

  // ── CHAPTER 06 ──────────────────────────────────────────
  {
    id: 10,
    chapter: "Ch06",
    en: "What is JWT?",
    vi: "JWT là gì?",
    options: [
      { label: "A", en: "Java Web Token", vi: "Java Web Token" },
      { label: "B", en: "JSON Web Token — a compact, self-contained token for securely transmitting information", vi: "JSON Web Token — token nhỏ gọn, tự chứa thông tin để truyền an toàn giữa các bên" },
      { label: "C", en: "JavaScript Worker Thread", vi: "JavaScript Worker Thread" },
      { label: "D", en: "JSON Wrapper Transport", vi: "JSON Wrapper Transport" },
    ],
    answer: "B",
    explanation: "JWT gồm 3 phần cách nhau bởi dấu chấm: Header.Payload.Signature. Header chứa thuật toán (HS256, RS256...), Payload chứa claims (userId, role, exp...), Signature để verify tính toàn vẹn. JWT là stateless — server không cần lưu session, chỉ cần verify chữ ký là biết token có hợp lệ không."
  },
  {
    id: 11,
    chapter: "Ch06",
    en: "In ASP.NET Core JWT authentication, what is the purpose of the 'Issuer' claim?",
    vi: "Trong JWT authentication của ASP.NET Core, 'Issuer' claim có mục đích gì?",
    options: [
      { label: "A", en: "Identifies the user making the request", vi: "Xác định user đang gửi request" },
      { label: "B", en: "Identifies the server that issued the token", vi: "Xác định server đã phát hành token" },
      { label: "C", en: "Specifies the token expiration time", vi: "Chỉ định thời gian hết hạn của token" },
      { label: "D", en: "Specifies the encryption algorithm used", vi: "Chỉ định thuật toán mã hóa được dùng" },
    ],
    answer: "B",
    explanation: "Issuer (iss claim) xác định ai đã tạo ra token — thường là URL của auth server. Khi validate token, server kiểm tra Issuer để đảm bảo token được phát hành bởi đúng nguồn tin cậy. Các claim quan trọng: iss (issuer), aud (audience), sub (subject/userId), exp (expiration), iat (issued at)."
  },

  // ── CHAPTER 07 ──────────────────────────────────────────
  {
    id: 12,
    chapter: "Ch07",
    en: "What is AJAX?",
    vi: "AJAX là gì?",
    options: [
      { label: "A", en: "A JavaScript framework for building UI components", vi: "Một JavaScript framework để xây dựng UI components" },
      { label: "B", en: "Asynchronous JavaScript and XML — a technique to send/receive data from a server without reloading the page", vi: "Asynchronous JavaScript and XML — kỹ thuật gửi/nhận dữ liệu từ server mà không reload trang" },
      { label: "C", en: "A CSS animation library", vi: "Một thư viện CSS animation" },
      { label: "D", en: "A database query language", vi: "Một ngôn ngữ truy vấn database" },
    ],
    answer: "B",
    explanation: "AJAX cho phép update một phần trang web mà không cần reload toàn bộ. Ngày nay thường dùng fetch() API hoặc axios thay cho XMLHttpRequest cũ. Trong React/Vue, mọi call API đều là AJAX dưới hood. Quan trọng: phải xử lý CORS khi gọi API khác domain."
  },

  // ── CHAPTER 08 ──────────────────────────────────────────
  {
    id: 13,
    chapter: "Ch08",
    en: "What does WCF stand for?",
    vi: "WCF là viết tắt của cụm từ nào?",
    options: [
      { label: "A", en: "Web Component Framework", vi: "Web Component Framework" },
      { label: "B", en: "Windows Communication Foundation", vi: "Windows Communication Foundation" },
      { label: "C", en: "Web Content Filter", vi: "Web Content Filter" },
      { label: "D", en: "Workflow Control Function", vi: "Workflow Control Function" },
    ],
    answer: "B",
    explanation: "WCF = Windows Communication Foundation. Framework của Microsoft để xây dựng service-oriented applications, hỗ trợ nhiều protocol: HTTP, TCP, Named Pipes, MSMQ. Dùng SOAP/WSDL thay vì REST/JSON. Trong .NET Core thì có CoreWCF là bản port lại. Thường gặp trong hệ thống enterprise cũ."
  },

  // ── CHAPTER 09 ──────────────────────────────────────────
  {
    id: 14,
    chapter: "Ch09",
    en: "What is gRPC?",
    vi: "gRPC là gì?",
    options: [
      { label: "A", en: "A REST API standard by Google", vi: "Một chuẩn REST API của Google" },
      { label: "B", en: "A high-performance RPC framework using HTTP/2 and Protocol Buffers", vi: "Framework RPC hiệu năng cao dùng HTTP/2 và Protocol Buffers" },
      { label: "C", en: "A GraphQL implementation by Google", vi: "Một implementation GraphQL của Google" },
      { label: "D", en: "A JavaScript runtime environment", vi: "Một môi trường runtime JavaScript" },
    ],
    answer: "B",
    explanation: "gRPC = Google Remote Procedure Call. Dùng HTTP/2 (multiplexing, header compression) và Protobuf (binary format nhỏ hơn JSON). Contract được định nghĩa trong file .proto, sau đó generate code cho cả client và server. Nhanh hơn REST nhiều nhưng khó debug hơn vì binary. Thường dùng cho internal service-to-service communication."
  },

  // ── CHAPTER 10 ──────────────────────────────────────────
  {
    id: 15,
    chapter: "Ch10",
    en: "What is the main advantage of Microservices architecture over Monolithic architecture?",
    vi: "Ưu điểm chính của kiến trúc Microservices so với Monolithic là gì?",
    options: [
      { label: "A", en: "Simpler to develop and debug", vi: "Đơn giản hơn để phát triển và debug" },
      { label: "B", en: "Independent deployment, scaling, and technology choice per service", vi: "Triển khai độc lập, scale độc lập, và tự chọn công nghệ cho từng service" },
      { label: "C", en: "Lower network latency between components", vi: "Độ trễ mạng thấp hơn giữa các thành phần" },
      { label: "D", en: "Single codebase is easier to maintain", vi: "Một codebase duy nhất dễ bảo trì hơn" },
    ],
    answer: "B",
    explanation: "Microservices: mỗi service là một process độc lập, có database riêng, deploy riêng. Lợi ích: scale từng service riêng (chỉ scale service tải cao), team độc lập, dùng tech stack khác nhau cho từng service, fault isolation (1 service chết không kéo cả hệ thống). Nhược: phức tạp hơn nhiều — phải giải quyết distributed tracing, service discovery, API gateway..."
  },
  // ── NEW QUESTIONS FROM QUIZLET ──────────────────────────
  {
    id: 16, chapter: "Ch04",
    en: "How can you specify the returned data properties in OData?",
    vi: "Làm thế nào để chỉ định các thuộc tính dữ liệu trả về trong OData?",
    options: [
      { label: "A", en: "By using the $select query option.", vi: "Bằng cách sử dụng $select query option." },
      { label: "B", en: "By using the $filter query option.", vi: "Bằng cách sử dụng $filter query option." },
      { label: "C", en: "By using the $order query option.", vi: "Bằng cách sử dụng $order query option." },
      { label: "D", en: "By using the $expand query option.", vi: "Bằng cách sử dụng $expand query option." },
    ],
    answer: "A",
    explanation: "`$select` cho phép chỉ định **chính xác field nào** cần trả về, tương tự `SELECT col1, col2` trong SQL. `$filter` để lọc record, `$expand` để include navigation property, `$orderby` (không phải `$order`) để sắp xếp."
  },
  {
    id: 17, chapter: "Ch09",
    en: "Which one is not a benefit of gRPC?",
    vi: "Đâu KHÔNG phải là lợi ích của gRPC?",
    options: [
      { label: "A", en: "Modern, high-performance, lightweight RPC framework.", vi: "Framework RPC hiện đại, hiệu suất cao, nhẹ." },
      { label: "B", en: "Supports client, server, but does not allow bi-directional streaming calls.", vi: "Hỗ trợ client, server nhưng không cho phép bi-directional streaming." },
      { label: "C", en: "Contract-first API development, using Protocol Buffers by default, allowing for language agnostic implementations.", vi: "Phát triển API theo hướng contract-first, mặc định dùng Protocol Buffers." },
      { label: "D", en: "Tooling available for many languages to generate strongly-typed servers and clients.", vi: "Có tooling cho nhiều ngôn ngữ để generate strongly-typed servers và clients." },
    ],
    answer: "B",
    explanation: "gRPC **hỗ trợ đầy đủ 4 loại streaming**: Unary, Server streaming, Client streaming, và **Bi-directional streaming**. Đây là một trong những điểm mạnh nổi bật nhất của gRPC so với REST."
  },
  {
    id: 18, chapter: "Ch05",
    en: "How do you add query strings to a URL in ASP.NET Core Web API?",
    vi: "Làm thế nào để thêm query string vào URL trong ASP.NET Core Web API?",
    options: [
      { label: "A", en: "By appending the parameters directly to the route template", vi: "Bằng cách thêm trực tiếp vào route template" },
      { label: "B", en: "By using the [FromQuery] attribute in the action method's parameters", vi: "Bằng cách dùng attribute [FromQuery] trong tham số của action method" },
      { label: "C", en: "By using the [QueryString] attribute in the action method's parameters", vi: "Bằng cách dùng attribute [QueryString] trong tham số (không tồn tại)" },
      { label: "D", en: "By adding them as headers in the request", vi: "Bằng cách thêm vào headers của request" },
    ],
    answer: "B",
    explanation: "`[FromQuery]` là binding source attribute chuẩn để map query string parameters (vd: `?page=2&size=10`) vào tham số của action method. `[QueryString]` không tồn tại trong ASP.NET Core."
  },
  {
    id: 19, chapter: "Ch01",
    en: "Which HTTP verb is used to create a new resource in a RESTful service?",
    vi: "HTTP verb nào dùng để tạo resource mới trong RESTful service?",
    options: [
      { label: "A", en: "DELETE", vi: "DELETE" },
      { label: "B", en: "POST", vi: "POST" },
      { label: "C", en: "PUT", vi: "PUT" },
      { label: "D", en: "GET", vi: "GET" },
    ],
    answer: "B",
    explanation: "Theo quy ước REST (CRUD): **POST** = Create (tạo mới), GET = Read, PUT/PATCH = Update, DELETE = Delete. POST gửi đến collection endpoint (vd: `POST /api/products`) và server tự sinh ID, trả về `201 Created`."
  },
  {
    id: 20, chapter: "Ch05",
    en: "Which annotation attribute can be used to specify validation rules in ASP.NET Core Web API?",
    vi: "Attribute annotation nào dùng để chỉ định quy tắc validation trong ASP.NET Core Web API?",
    options: [
      { label: "A", en: "[Rule]", vi: "[Rule]" },
      { label: "B", en: "[Required]", vi: "[Required]" },
      { label: "C", en: "[Validation]", vi: "[Validation]" },
      { label: "D", en: "[Validate]", vi: "[Validate]" },
    ],
    answer: "B",
    explanation: "`[Required]` là **Data Annotation** hợp lệ trong `System.ComponentModel.DataAnnotations`. Các attribute hợp lệ khác: `[Range]`, `[MaxLength]`, `[MinLength]`, `[RegularExpression]`, `[EmailAddress]`. `[Rule]`, `[Validation]`, `[Validate]` đều không tồn tại."
  },
  {
    id: 21, chapter: "Ch09",
    en: "Can Protocol Buffers be used for bidirectional streaming in gRPC with C#?",
    vi: "Protocol Buffers có thể dùng cho bidirectional streaming trong gRPC với C# không?",
    options: [
      { label: "A", en: "Yes, Protocol Buffers support bidirectional streaming in gRPC with C#.", vi: "Có, Protocol Buffers hỗ trợ bidirectional streaming trong gRPC với C#." },
      { label: "B", en: "Bidirectional streaming is not supported by gRPC with C#.", vi: "gRPC với C# không hỗ trợ bidirectional streaming." },
      { label: "C", en: "Protocol Buffers cannot be used for streaming in gRPC with C#.", vi: "Protocol Buffers không thể dùng cho streaming trong gRPC với C#." },
      { label: "D", en: "No, Protocol Buffers only support unidirectional streaming in gRPC with C#.", vi: "Không, Protocol Buffers chỉ hỗ trợ unidirectional streaming." },
    ],
    answer: "A",
    explanation: "gRPC với C# **hỗ trợ bidirectional streaming** thông qua `stream` keyword trong file `.proto`. Định nghĩa: `rpc Chat(stream ChatMessage) returns (stream ChatMessage);` — cả 2 chiều đều stream cùng lúc."
  },
  {
    id: 22, chapter: "Ch10",
    en: "Choose the correct information about Azure Service Fabric.",
    vi: "Chọn thông tin đúng về Azure Service Fabric.",
    options: [
      { label: "A", en: "Azure Service Fabric is a distributed systems platform that makes it easy to package, deploy, and manage scalable and reliable microservices and containers.", vi: "Azure Service Fabric là nền tảng hệ thống phân tán giúp dễ dàng đóng gói, triển khai và quản lý microservice và container có khả năng mở rộng." },
      { label: "B", en: "None of the others.", vi: "Không có đáp án nào khác." },
      { label: "C", en: "Azure Service Fabric is a centralization systems platform.", vi: "Azure Service Fabric là nền tảng hệ thống tập trung hóa." },
      { label: "D", en: "Azure Service Fabric is a localization systems platform.", vi: "Azure Service Fabric là nền tảng hệ thống bản địa hóa." },
    ],
    answer: "A",
    explanation: "**Azure Service Fabric** là nền tảng **distributed systems** (hệ thống phân tán) của Microsoft, không phải centralized hay localized. Dùng để build và quản lý microservice production-grade, hỗ trợ cả stateful và stateless service."
  },
  {
    id: 23, chapter: "Ch08",
    en: "What is the main difference between [DataContract] and [MessageContract] in WCF?",
    vi: "Sự khác biệt chính giữa [DataContract] và [MessageContract] trong WCF là gì?",
    options: [
      { label: "A", en: "[DataContract] is for request messages, [MessageContract] is for response messages.", vi: "[DataContract] cho request message, [MessageContract] cho response message." },
      { label: "B", en: "[DataContract] defines message headers, [MessageContract] defines message bodies.", vi: "[DataContract] định nghĩa message header, [MessageContract] định nghĩa message body." },
      { label: "C", en: "[DataContract] is for contract-first development, [MessageContract] is for code-first.", vi: "[DataContract] cho contract-first, [MessageContract] cho code-first." },
      { label: "D", en: "[DataContract] is for defining data structures, [MessageContract] is for defining message formats.", vi: "[DataContract] định nghĩa cấu trúc dữ liệu, [MessageContract] định nghĩa định dạng message." },
    ],
    answer: "D",
    explanation: "`[DataContract]` định nghĩa **cấu trúc dữ liệu** (data type/schema) được serialize. `[MessageContract]` cho phép kiểm soát toàn bộ **cấu trúc SOAP envelope** gồm header (`[MessageHeader]`) và body (`[MessageBodyMember]`)."
  },
  {
    id: 24, chapter: "Ch03",
    en: "What is the default CORS policy behavior in ASP.NET Core Web API if no policy is explicitly configured? (Choose 2 answers)",
    vi: "Hành vi CORS mặc định trong ASP.NET Core Web API khi chưa cấu hình policy là gì? (Chọn 2 đáp án)",
    options: [
      { label: "A", en: "Only same-origin requests are allowed", vi: "Chỉ các request cùng origin mới được cho phép" },
      { label: "B", en: "An exception is thrown for all cross-origin requests", vi: "Một exception được ném ra cho tất cả cross-origin request" },
      { label: "C", en: "All cross-origin requests are allowed", vi: "Tất cả cross-origin request đều được cho phép" },
      { label: "D", en: "All cross-origin requests are blocked.", vi: "Tất cả cross-origin request đều bị block." },
    ],
    answer: ["A", "D"],
    multi: true,
    explanation: "Khi chưa cấu hình CORS: **A đúng** — browser áp dụng same-origin policy, chỉ cho phép request cùng origin. **D đúng** — tất cả cross-origin request bị block ở phía browser. Không có exception nào được ném từ server — việc block xảy ra ở client."
  },
  {
    id: 25, chapter: "Ch03",
    en: "Which attribute can be used to indicate the expected media type for a request or response in Web API?",
    vi: "Attribute nào dùng để chỉ định media type mong đợi cho request hoặc response trong Web API?",
    options: [
      { label: "A", en: "[HttpGet]", vi: "[HttpGet]" },
      { label: "B", en: "[Consumes]", vi: "[Consumes]" },
      { label: "C", en: "[HttpPost]", vi: "[HttpPost]" },
      { label: "D", en: "[Produces]", vi: "[Produces]" },
    ],
    answer: "D",
    explanation: "`[Produces(\"application/json\")]` chỉ định **media type của response**. `[Consumes(\"application/json\")]` chỉ định media type của request body mà action chấp nhận. Theo đáp án đề gốc, D là đúng."
  },
  {
    id: 26, chapter: "Ch09",
    en: "gRPC services couldn't be hosted by which ASP.NET Core server?",
    vi: "gRPC service không thể được host bởi ASP.NET Core server nào?",
    options: [
      { label: "A", en: "Kestrel", vi: "Kestrel" },
      { label: "B", en: "IIS", vi: "IIS" },
      { label: "C", en: "TestServer", vi: "TestServer" },
      { label: "D", en: "HTTP.sys", vi: "HTTP.sys" },
      { label: "E", en: "All of the others", vi: "Tất cả các đáp án còn lại" },
    ],
    answer: "C",
    explanation: "**TestServer** (dùng trong integration test) không hỗ trợ HTTP/2 — giao thức bắt buộc của gRPC. Kestrel, IIS (với HTTP/2 enabled) và HTTP.sys đều có thể host gRPC. Để test gRPC cần dùng `GrpcChannel` với `WebApplicationFactory`."
  },
  {
    id: 27, chapter: "Ch01",
    en: "In ASP.NET Core Web API, which file is used to configure the application and its services?",
    vi: "Trong ASP.NET Core Web API, file nào dùng để cấu hình ứng dụng và các service?",
    options: [
      { label: "A", en: "Startup.cs", vi: "Startup.cs" },
      { label: "B", en: "appsettings.Development.json", vi: "appsettings.Development.json" },
      { label: "C", en: "appsettings.json", vi: "appsettings.json" },
      { label: "D", en: "Program.cs", vi: "Program.cs" },
    ],
    answer: "A",
    explanation: "`Startup.cs` là nơi cấu hình trung tâm: `ConfigureServices()` đăng ký DI services, `Configure()` build middleware pipeline. Từ .NET 6+, logic này được hợp nhất vào `Program.cs`. Đề dùng .NET 5 nên đáp án là A."
  },
  {
    id: 28, chapter: "Ch01",
    en: "Which middleware is used to serve static files like HTML, CSS, and JavaScript in ASP.NET Core Web API?",
    vi: "Middleware nào dùng để serve file tĩnh (HTML, CSS, JS) trong ASP.NET Core Web API?",
    options: [
      { label: "A", en: "app.UseCors()", vi: "app.UseCors()" },
      { label: "B", en: "app.UseStaticFiles()", vi: "app.UseStaticFiles()" },
      { label: "C", en: "app.UseExceptionHandler()", vi: "app.UseExceptionHandler()" },
      { label: "D", en: "app.UseHttpsRedirection()", vi: "app.UseHttpsRedirection()" },
    ],
    answer: "B",
    explanation: "`app.UseStaticFiles()` kích hoạt middleware serve **static file** từ thư mục `wwwroot`. Nếu không đăng ký middleware này, file tĩnh sẽ không được serve."
  },
  {
    id: 29, chapter: "Ch10",
    en: "What is .NET for Docker containers?",
    vi: ".NET cho Docker containers là gì?",
    options: [
      { label: "A", en: "A runtime environment for executing .NET applications in Docker containers", vi: "Môi trường runtime để thực thi ứng dụng .NET trong Docker containers" },
      { label: "B", en: "A programming language specifically designed for Docker containers", vi: "Ngôn ngữ lập trình thiết kế riêng cho Docker containers" },
      { label: "C", en: "A container orchestration tool for managing Docker containers", vi: "Công cụ điều phối container để quản lý Docker containers" },
      { label: "D", en: "A containerization platform developed by Microsoft", vi: "Nền tảng containerization được phát triển bởi Microsoft" },
    ],
    answer: "A",
    explanation: "**.NET cho Docker** là **runtime environment** cho phép chạy ứng dụng .NET trong Docker container. Microsoft cung cấp official Docker images: `mcr.microsoft.com/dotnet/aspnet` (runtime) và `mcr.microsoft.com/dotnet/sdk` (build). Docker là platform container, .NET là runtime chạy trên đó."
  },
  {
    id: 30, chapter: "Ch01",
    en: "Choose the option that is NOT one of the characteristics of a REST based network.",
    vi: "Chọn đáp án KHÔNG phải là đặc điểm của mạng dựa trên REST.",
    options: [
      { label: "A", en: "Cache", vi: "Cache" },
      { label: "B", en: "Client-Server", vi: "Client-Server" },
      { label: "C", en: "Stateful", vi: "Stateful" },
      { label: "D", en: "Uniform interface", vi: "Giao diện đồng nhất" },
    ],
    answer: "C",
    explanation: "6 constraints của REST: Client-Server, **Stateless** (không phải Stateful), Cacheable, Uniform Interface, Layered System, Code on Demand. **Stateful** là ngược lại với nguyên tắc Stateless — mỗi request phải tự chứa đủ thông tin để server xử lý, không lưu session."
  },
  {
    id: 31, chapter: "Ch06",
    en: "Which part of the JWT contains information needed to verify the signature?",
    vi: "Phần nào của JWT chứa thông tin cần để verify signature?",
    options: [
      { label: "A", en: "Header", vi: "Header" },
      { label: "B", en: "Payload", vi: "Payload" },
      { label: "C", en: "Signature", vi: "Signature" },
      { label: "D", en: "Body", vi: "Body" },
    ],
    answer: "A",
    explanation: "**JWT Header** chứa `alg` (thuật toán ký: HS256, RS256...) và `typ` (\"JWT\"). Để verify signature, server cần biết thuật toán từ Header. Signature = HMAC/RSA của `Base64(Header).Base64(Payload)` với secret/key."
  },
  {
    id: 32, chapter: "Ch01",
    en: "What is the purpose of the UseEndPoints middleware in ASP.NET Core Web API?",
    vi: "Mục đích của middleware UseEndPoints trong ASP.NET Core Web API là gì?",
    options: [
      { label: "A", en: "To handle HTTP requests and responses", vi: "Để xử lý HTTP request và response" },
      { label: "B", en: "To map incoming requests to appropriate endpoint handlers", vi: "Để map incoming request đến endpoint handler phù hợp" },
      { label: "C", en: "To enable routing for static files in the web application", vi: "Để bật routing cho file tĩnh" },
      { label: "D", en: "To provide authentication and authorization features", vi: "Để cung cấp tính năng authentication và authorization" },
    ],
    answer: "B",
    explanation: "`app.UseEndpoints()` **thực thi** việc dispatch request đến đúng handler (controller action, Razor Page, SignalR hub...). Pipeline: `UseRouting()` → `UseAuthentication()` → `UseAuthorization()` → `UseEndpoints()`. UseRouting xác định endpoint, UseEndpoints thực thi nó."
  },
  {
    id: 33, chapter: "Ch01",
    en: "What is the Startup class in ASP.NET Core Web API?",
    vi: "Startup class trong ASP.NET Core Web API là gì?",
    options: [
      { label: "A", en: "Startup class is the entry point of the ASP.NET Core application or Web API.", vi: "Startup class là entry point của ứng dụng ASP.NET Core." },
      { label: "B", en: "It is not necessary that class name must be Startup, it can be anything, just need to configure startup class in Program class.", vi: "Tên class không nhất thiết phải là Startup, có thể là bất kỳ tên gì, chỉ cần config trong Program class." },
      { label: "C", en: "Both the answers are correct", vi: "Cả hai đáp án đều đúng" },
      { label: "D", en: "Both the answers are incorrect", vi: "Cả hai đáp án đều sai" },
    ],
    answer: "C",
    explanation: "**Cả A và B đều đúng**: A — Startup class là nơi cấu hình chính. B — Tên class không bắt buộc phải là 'Startup', có thể đặt tên khác và chỉ định trong `WebHostBuilder.UseStartup<T>()`. Từ .NET 6, không cần Startup class riêng nữa (gộp vào Program.cs)."
  },
  {
    id: 34, chapter: "Ch08",
    en: "What is the main advantage of using WCF for building RESTful services?",
    vi: "Lợi thế chính của WCF khi xây dựng RESTful service là gì?",
    options: [
      { label: "A", en: "Improved performance", vi: "Hiệu suất cải thiện" },
      { label: "B", en: "Cross-platform compatibility", vi: "Tương thích đa nền tảng" },
      { label: "C", en: "Scalability and flexibility", vi: "Khả năng mở rộng và tính linh hoạt" },
      { label: "D", en: "Security enhancements", vi: "Cải tiến bảo mật" },
    ],
    answer: "C",
    explanation: "WCF hỗ trợ nhiều **binding và transport protocol** (HTTP, TCP, MSMQ, Named Pipes), cho phép cấu hình linh hoạt nhiều loại giao tiếp khác nhau. **Scalability và flexibility** là lợi thế chính. Lưu ý: WCF không cross-platform (chỉ .NET Framework, có CoreWCF cho .NET Core nhưng giới hạn)."
  },
  {
    id: 35, chapter: "Ch05",
    en: "What happens if model validation fails in ASP.NET Core Web API?",
    vi: "Điều gì xảy ra khi model validation thất bại trong ASP.NET Core Web API?",
    options: [
      { label: "A", en: "The API endpoint returns a 500 Internal Server Error response", vi: "API endpoint trả về 500 Internal Server Error" },
      { label: "B", en: "The API endpoint returns a 404 Not Found response", vi: "API endpoint trả về 404 Not Found" },
      { label: "C", en: "The ASP.NET Core Web API automatically handles and returns a 400 Bad Request response", vi: "ASP.NET Core Web API tự động xử lý và trả về 400 Bad Request" },
      { label: "D", en: "The ASP.NET Core Web API throws an exception and crashes", vi: "ASP.NET Core Web API ném exception và crash" },
    ],
    answer: "C",
    explanation: "Khi dùng `[ApiController]`, ASP.NET Core tự động kiểm tra `ModelState.IsValid` và trả về **HTTP 400 Bad Request** kèm `ValidationProblemDetails` nếu validation fail — không cần code thủ công. Không có exception, không crash."
  },
  {
    id: 36, chapter: "Ch04",
    en: "Can you have multiple [Route] attributes on a single action method in ASP.NET Core Web API?",
    vi: "Có thể có nhiều attribute [Route] trên một action method trong ASP.NET Core Web API không?",
    options: [
      { label: "A", en: "Yes, but only for different HTTP methods", vi: "Có, nhưng chỉ cho các HTTP method khác nhau" },
      { label: "B", en: "No, it is not supported in Attribute Routing", vi: "Không, Attribute Routing không hỗ trợ điều này" },
      { label: "C", en: "Yes, it allows you to define multiple routes for the same action method", vi: "Có, cho phép định nghĩa nhiều route cho cùng một action method" },
      { label: "D", en: "Yes, but only for different controller classes", vi: "Có, nhưng chỉ cho các controller class khác nhau" },
    ],
    answer: "C",
    explanation: "ASP.NET Core **hỗ trợ nhiều `[Route]` attribute** trên cùng một action. Ví dụ: `[Route(\"api/products\")]` + `[Route(\"api/items\")]` → cùng một action xử lý cả 2 URL. Hữu ích cho backward compatibility khi đổi tên endpoint hoặc API versioning."
  },
  {
    id: 37, chapter: "Ch04",
    en: "What does the $top operator do in OData?",
    vi: "$top operator trong OData làm gì?",
    options: [
      { label: "A", en: "It retrieves only a specified number of records from the data.", vi: "Nó chỉ lấy số lượng bản ghi được chỉ định." },
      { label: "B", en: "It selects specific properties from the data.", vi: "Nó chọn các thuộc tính cụ thể." },
      { label: "C", en: "It performs pagination by skipping a specified number of records.", vi: "Nó phân trang bằng cách bỏ qua số bản ghi được chỉ định." },
      { label: "D", en: "It groups the data based on specific properties.", vi: "Nó nhóm dữ liệu dựa trên các thuộc tính." },
    ],
    answer: "A",
    explanation: "`$top=N` giới hạn số bản ghi trả về (tương tự `TOP N` trong SQL hoặc `.Take(N)` trong LINQ). Ví dụ: `GET /api/products?$top=5` → chỉ trả về 5 sản phẩm. Kết hợp `$skip` + `$top` để phân trang."
  },
  {
    id: 38, chapter: "Ch03",
    en: "How can you return an XML response from an action method in ASP.NET Core Web API?",
    vi: "Làm thế nào để trả về XML response từ action method trong ASP.NET Core Web API?",
    options: [
      { label: "A", en: "By using the [XmlResult] attribute on the action method.", vi: "Dùng attribute [XmlResult] trên action method." },
      { label: "B", en: "By manually serializing the data to XML format using an XmlSerializer.", vi: "Tự serialize data sang XML bằng XmlSerializer." },
      { label: "C", en: "By returning an ObjectResult with the desired data and specifying the response format as XML.", vi: "Trả về ObjectResult với data và chỉ định format là XML." },
      { label: "D", en: "By configuring the media types in the Startup class", vi: "Bằng cách cấu hình media types trong Startup class" },
    ],
    answer: "D",
    explanation: "Để hỗ trợ XML response: thêm XML formatter trong `Startup.cs` (hoặc `Program.cs`): `services.AddControllers().AddXmlSerializerFormatters()`. Sau đó client gửi `Accept: application/xml` header, server tự trả XML qua content negotiation. `[XmlResult]` không tồn tại trong ASP.NET Core."
  },
  {
    id: 39, chapter: "Ch05",
    en: "Consider model binding in ASP.NET Core — choose one that is NOT a role of the model binding system.",
    vi: "Xét model binding trong ASP.NET Core — chọn một điều KHÔNG phải là vai trò của hệ thống model binding.",
    options: [
      { label: "A", en: "Converts string data to .NET types.", vi: "Chuyển đổi string data sang .NET types." },
      { label: "B", en: "Provides the data to view using method parameters and public properties.", vi: "Cung cấp dữ liệu cho view sử dụng method parameters và public properties." },
      { label: "C", en: "Updates properties of complex types.", vi: "Cập nhật properties của complex types." },
      { label: "D", en: "Retrieves data from various sources such as route data, form fields, and query strings.", vi: "Lấy dữ liệu từ nhiều nguồn: route data, form fields, query strings." },
    ],
    answer: "B",
    explanation: "Model binding **không** có vai trò cung cấp data cho **View**. Nhiệm vụ của model binding: lấy data từ HTTP request (route, query, form, body), convert sang .NET types, update complex type properties. Truyền data vào View là trách nhiệm của controller qua ViewBag/ViewData/ViewModel."
  },
  {
    id: 40, chapter: "Ch08",
    en: "You need to implement which interface for global exception handling in WCF?",
    vi: "Cần implement interface nào để xử lý exception toàn cục trong WCF?",
    options: [
      { label: "A", en: "IWCFException", vi: "IWCFException" },
      { label: "B", en: "IErrorHandler", vi: "IErrorHandler" },
      { label: "C", en: "IExceptionHandler", vi: "IExceptionHandler" },
      { label: "D", en: "IArgumentHandler", vi: "IArgumentHandler" },
    ],
    answer: "B",
    explanation: "`IErrorHandler` (namespace `System.ServiceModel.Dispatcher`) là interface chuẩn để xử lý exception toàn cục trong WCF. Implement 2 method: `HandleError(Exception)` và `ProvideFault(Exception, MessageVersion, ref Message)`. Đăng ký thông qua service behavior."
  },
  {
    id: 41, chapter: "Ch03",
    en: "What does \"Accept: application/json; q=0.8, application/xml; q=0.9\" mean in the Accept header?",
    vi: "\"Accept: application/json; q=0.8, application/xml; q=0.9\" trong Accept header có nghĩa gì?",
    options: [
      { label: "A", en: "The server should respond with JSON data only.", vi: "Server nên response với JSON only." },
      { label: "B", en: "The server should respond with XML data only.", vi: "Server nên response với XML only." },
      { label: "C", en: "The server should respond with either JSON or XML, but XML is preferred over JSON.", vi: "Server nên response JSON hoặc XML, nhưng XML được ưu tiên hơn JSON." },
      { label: "D", en: "The server should respond with either JSON or XML, but JSON is preferred over XML.", vi: "Server nên response JSON hoặc XML, nhưng JSON được ưu tiên hơn XML." },
    ],
    answer: "C",
    explanation: "**Quality factor `q`** (0.0–1.0) xác định mức ưu tiên. `q=0.9 > q=0.8` → **XML được ưu tiên hơn JSON**. Server chọn format có q cao nhất mà nó hỗ trợ. Đây là cơ chế **Content Negotiation** trong HTTP."
  },
  {
    id: 42, chapter: "Ch10",
    en: "What is a microservice?",
    vi: "Microservice là gì?",
    options: [
      { label: "A", en: "A monolithic application", vi: "Một ứng dụng monolithic" },
      { label: "B", en: "A self-contained, independent service", vi: "Một service tự chứa, độc lập" },
      { label: "C", en: "A programming language", vi: "Một ngôn ngữ lập trình" },
      { label: "D", en: "A database management system", vi: "Một hệ thống quản lý database" },
    ],
    answer: "B",
    explanation: "**Microservice** = service nhỏ, **tự chứa (self-contained)** và **độc lập (independent)**. Mỗi service đảm nhận một business capability, có thể deploy, scale và maintain riêng lẻ. Giao tiếp qua API (REST/gRPC) hoặc message queue."
  },
  {
    id: 43, chapter: "Ch10",
    en: "Choose the correct information to configure autoscaling for an Azure solution.",
    vi: "Chọn thông tin đúng để cấu hình autoscaling cho Azure solution.",
    options: [
      { label: "A", en: "Azure App Service has built-in autoscaling. Autoscale settings apply to all of the apps within an App Service.", vi: "Azure App Service có autoscaling tích hợp. Cài đặt Autoscale áp dụng cho tất cả apps trong một App Service Plan." },
      { label: "B", en: "The connection is slow in autoscaling option with Azure App Service.", vi: "Kết nối chậm trong tùy chọn autoscaling của Azure App Service." },
      { label: "C", en: "None of the others", vi: "Không có đáp án nào khác" },
      { label: "D", en: "All of the others", vi: "Tất cả các đáp án khác" },
      { label: "E", en: "Azure App Service has built-in autoscaling only at the role level", vi: "Azure App Service có autoscaling tích hợp chỉ ở cấp role" },
    ],
    answer: "A",
    explanation: "**Azure App Service** có **built-in autoscaling** theo metrics (CPU, memory, request count). Autoscale rules được cấu hình ở cấp **App Service Plan** và áp dụng cho **tất cả apps** trong plan đó. Scale out = thêm instance, Scale up = nâng cấp phần cứng."
  },
  {
    id: 44, chapter: "Ch08",
    en: "Which contract in WCF maps data contracts to SOAP envelopes?",
    vi: "Contract nào trong WCF map data contracts với SOAP envelope?",
    options: [
      { label: "A", en: "DataContract", vi: "DataContract" },
      { label: "B", en: "ServiceContract", vi: "ServiceContract" },
      { label: "C", en: "MessageContract", vi: "MessageContract" },
      { label: "D", en: "OperationContract", vi: "OperationContract" },
    ],
    answer: "C",
    explanation: "**MessageContract** kiểm soát cách data được map vào **SOAP envelope** (SOAP Header + SOAP Body). Dùng `[MessageHeader]` và `[MessageBodyMember]` để chỉ định vị trí của từng field trong SOAP message."
  },
  {
    id: 45, chapter: "Ch08",
    en: "Which type of contract is applicable to interface in WCF?",
    vi: "Loại contract nào áp dụng cho interface trong WCF?",
    options: [
      { label: "A", en: "Message contract", vi: "Message contract" },
      { label: "B", en: "Service contract", vi: "Service contract" },
      { label: "C", en: "Operation contract", vi: "Operation contract" },
      { label: "D", en: "Data contract", vi: "Data contract" },
    ],
    answer: "B",
    explanation: "`[ServiceContract]` đặt trên **interface** để định nghĩa WCF service. Quy tắc: interface → `[ServiceContract]`, method trong interface → `[OperationContract]`, class/DTO → `[DataContract]`, class message → `[MessageContract]`."
  },
  {
    id: 46, chapter: "Ch01",
    en: "Choose the INCORRECT HTTP response component.",
    vi: "Chọn thành phần HTTP response KHÔNG chính xác.",
    options: [
      { label: "A", en: "HTTP Status Code.", vi: "HTTP Status Code." },
      { label: "B", en: "Response Headers.", vi: "Response Headers." },
      { label: "C", en: "Each Response must have a unique URL.", vi: "Mỗi Response phải có một URL duy nhất." },
      { label: "D", en: "Data - Response can have data return to the client.", vi: "Data — Response có thể có dữ liệu trả về cho client." },
    ],
    answer: "C",
    explanation: "HTTP Response gồm: **Status Line** (version + code + reason), **Headers**, **Body** (optional). **URL là thuộc tính của Request**, không phải Response. Response không cần và không có URL."
  },
  {
    id: 47, chapter: "Ch01",
    en: "What is JSON? (Choose 2 answers)",
    vi: "JSON là gì? (Chọn 2 đáp án)",
    options: [
      { label: "A", en: "JSON is used for representing structured information such as documents, data, configuration, etc.", vi: "JSON dùng để biểu diễn thông tin có cấu trúc như tài liệu, dữ liệu, cấu hình, v.v." },
      { label: "B", en: "JSON is especially designed to store and transport data.", vi: "JSON được thiết kế đặc biệt để lưu trữ và truyền tải dữ liệu." },
      { label: "C", en: "JSON is a lightweight format designed to store and transport data.", vi: "JSON là định dạng nhẹ được thiết kế để lưu trữ và truyền tải dữ liệu." },
      { label: "D", en: "JSON is similar to HTML but more flexible because it allows users to create their own custom tags.", vi: "JSON tương tự HTML nhưng linh hoạt hơn vì cho phép tạo tag tùy chỉnh." },
    ],
    answer: ["A", "C"],
    multi: true,
    explanation: "**A đúng**: JSON dùng để represent structured data (documents, config, API response...). **C đúng**: JSON là **lightweight format** để store và transport data. **B sai**: thiếu từ 'lightweight' — C đầy đủ và chính xác hơn. **D sai hoàn toàn**: đó là mô tả của XML, không phải JSON."
  },
  {
    id: 48, chapter: "Ch05",
    en: "A binding source attribute defines where an action parameter's value is found. Which one is NOT a binding source attribute?",
    vi: "Binding source attribute xác định nơi tìm giá trị của action parameter. Đâu KHÔNG phải là binding source attribute?",
    options: [
      { label: "A", en: "[FromQuery]", vi: "[FromQuery]" },
      { label: "B", en: "[FromRouting]", vi: "[FromRouting]" },
      { label: "C", en: "[FromHeader]", vi: "[FromHeader]" },
      { label: "D", en: "[FromServices]", vi: "[FromServices]" },
    ],
    answer: "B",
    explanation: "Các binding source attributes hợp lệ: `[FromQuery]`, **`[FromRoute]`** (không phải `[FromRouting]`), `[FromHeader]`, `[FromBody]`, `[FromForm]`, `[FromServices]`. **`[FromRouting]` không tồn tại** — tên đúng là `[FromRoute]` (không có '-ing')."
  },
  {
    id: 49, chapter: "Ch04",
    en: "Which OData query option determines all attributes or properties to include in the fetched result?",
    vi: "OData query option nào xác định các thuộc tính cần include trong kết quả?",
    options: [
      { label: "A", en: "$top", vi: "$top" },
      { label: "B", en: "$selectall", vi: "$selectall" },
      { label: "C", en: "$select", vi: "$select" },
      { label: "D", en: "$inlinecount", vi: "$inlinecount" },
    ],
    answer: "C",
    explanation: "`$select` chỉ định **danh sách property** cần trả về (giống `SELECT` trong SQL). Ví dụ: `$select=Name,Price` chỉ trả về 2 field đó. `$selectall` không tồn tại, `$top` giới hạn số record, `$inlinecount` trả tổng số record."
  },
  {
    id: 50, chapter: "Ch01",
    en: "Choose the INCORRECT information about .NET Standard.",
    vi: "Chọn thông tin KHÔNG ĐÚNG về .NET Standard.",
    options: [
      { label: "A", en: "All of the others.", vi: "Tất cả các đáp án còn lại." },
      { label: "B", en: "The .NET Standard is a formal specification of .NET APIs that are intended to be available on .NET Core, .NET6 only.", vi: ".NET Standard là đặc tả chính thức của .NET API chỉ dành cho .NET Core, .NET6." },
      { label: "C", en: "None of the others.", vi: "Không có đáp án nào khác." },
      { label: "D", en: "The .NET Standard is a formal specification of .NET APIs intended to be available on all .NET implementations (.NET Core, .NET Framework, etc.)", vi: ".NET Standard là đặc tả chính thức của .NET API dành cho tất cả .NET implementations (.NET Core, .NET Framework, v.v.)" },
    ],
    answer: "B",
    explanation: "**B sai** vì .NET Standard không chỉ cho .NET Core, .NET6 — nó áp dụng cho **tất cả** .NET implementations (.NET Core, .NET Framework, Xamarin, Unity...). Đó là mục đích chính: tạo sự đồng nhất trong toàn bộ hệ sinh thái .NET. Đáp án D mới là đúng."
  },
  {
    id: 51, chapter: "Ch01",
    en: "Choose the correct information about scaling RESTful web services.",
    vi: "Chọn thông tin đúng về scaling RESTful web service.",
    options: [
      { label: "A", en: "RESTful web services support only vertical scaling.", vi: "RESTful web service chỉ hỗ trợ vertical scaling." },
      { label: "B", en: "RESTful web services depend on the IP address and port number of the system to get a response.", vi: "RESTful web service phụ thuộc vào IP và port để nhận response." },
      { label: "C", en: "RESTful web services support both vertical and horizontal scaling.", vi: "RESTful web service hỗ trợ cả vertical lẫn horizontal scaling." },
      { label: "D", en: "None of the others.", vi: "Không có đáp án nào khác." },
    ],
    answer: "C",
    explanation: "Do tính **Stateless** của REST, server không lưu session state, nên dễ **scale horizontally** (thêm server) — mỗi request đều self-contained, bất kỳ server nào cũng xử lý được. REST cũng hỗ trợ **vertical scaling** (nâng cấp phần cứng server)."
  },
  {
    id: 52, chapter: "Ch09",
    en: "What is the purpose of interface IGrpcServerBuilder?",
    vi: "Mục đích của interface IGrpcServerBuilder là gì?",
    options: [
      { label: "A", en: "Options used to configure service instances.", vi: "Tùy chọn để cấu hình service instance." },
      { label: "B", en: "A builder abstraction for configuring gRPC servers.", vi: "Một abstraction builder để cấu hình gRPC server." },
      { label: "C", en: "Metadata for a gRPC method endpoint.", vi: "Metadata cho một gRPC method endpoint." },
      { label: "D", en: "Provides access to the gRPC server call context for the current HTTP request.", vi: "Cung cấp quyền truy cập vào gRPC server call context cho HTTP request hiện tại." },
    ],
    answer: "B",
    explanation: "`IGrpcServerBuilder` là interface trong `Grpc.AspNetCore` cung cấp **abstraction để cấu hình gRPC server** — đăng ký service, cấu hình interceptor, options. Sử dụng trong: `services.AddGrpc().AddServiceOptions<T>(...)` — builder pattern tương tự `IMvcBuilder` sau `AddControllers()`."
  },
  {
    id: 53, chapter: "Ch09",
    en: "Choose the correct code to create a gRPC channel on port 5001 with GrpcChannel class.",
    vi: "Chọn code đúng để tạo gRPC channel trên port 5001 với class GrpcChannel.",
    options: [
      { label: "A", en: "var channel = GrpcChannel.MakeAddress(\"https://localhost:5001\");", vi: "var channel = GrpcChannel.MakeAddress(\"https://localhost:5001\");" },
      { label: "B", en: "var channel = GrpcChannel.Dispose(\"https://localhost:5001\");", vi: "var channel = GrpcChannel.Dispose(\"https://localhost:5001\");" },
      { label: "C", en: "var channel = GrpcChannel.ForAddress(\"https://localhost:5001\");", vi: "var channel = GrpcChannel.ForAddress(\"https://localhost:5001\");" },
      { label: "D", en: "var channel = GrpcChannel.CreateAddress(\"https://localhost:5001\");", vi: "var channel = GrpcChannel.CreateAddress(\"https://localhost:5001\");" },
    ],
    answer: "C",
    explanation: "Cú pháp đúng: `GrpcChannel.ForAddress(\"https://localhost:5001\")`. Method `ForAddress()` tạo gRPC channel kết nối đến server. Sau đó dùng channel tạo client: `new Greeter.GreeterClient(channel)`. Channel nên được reuse (tốn chi phí tạo: TCP handshake, TLS negotiation)."
  },
  {
    id: 54, chapter: "Ch08",
    en: "Which tool is used to register WCF service to Windows?",
    vi: "Công cụ nào dùng để đăng ký WCF service với Windows?",
    options: [
      { label: "A", en: "installapp tool", vi: "Công cụ installapp" },
      { label: "B", en: "utilservice tool", vi: "Công cụ utilservice" },
      { label: "C", en: "installutil tool", vi: "Công cụ installutil" },
      { label: "D", en: "installservice tool", vi: "Công cụ installservice" },
    ],
    answer: "C",
    explanation: "`installutil.exe` là .NET Framework utility để **đăng ký WCF service như một Windows Service**. Lệnh install: `installutil.exe MyService.exe`. Gỡ đăng ký: `installutil.exe /u MyService.exe`. Chỉ có trong .NET Framework SDK."
  },
  {
    id: 55, chapter: "Ch08",
    en: "Hosting WCF Service with Base Address is configured in which file format?",
    vi: "Host WCF Service với Base Address được cấu hình trong định dạng file nào?",
    options: [
      { label: "A", en: "XML", vi: "XML" },
      { label: "B", en: "All of the others", vi: "Tất cả các đáp án còn lại" },
      { label: "C", en: "Text file with structure", vi: "File text có cấu trúc" },
      { label: "D", en: "JSON", vi: "JSON" },
    ],
    answer: "A",
    explanation: "WCF service được cấu hình trong **`App.config`** hoặc **`Web.config`** — định dạng **XML**. Section `<system.serviceModel>` chứa: `<services>` (base address, endpoints), `<behaviors>` (service behavior), `<bindings>`."
  },
  {
    id: 56, chapter: "Ch06",
    en: "Choose the correct information about IdentityDbContext.",
    vi: "Chọn thông tin đúng về IdentityDbContext.",
    options: [
      { label: "A", en: "IdentityDbContext represents the DbContext for Identity. It has definitions for all the tables required to enable ASP.NET Core Identity.", vi: "IdentityDbContext đại diện cho DbContext của Identity, có định nghĩa cho tất cả các bảng cần thiết." },
      { label: "B", en: "IdentityDbContext includes a user in Identity database", vi: "IdentityDbContext bao gồm user trong Identity database" },
      { label: "C", en: "IdentityDbContext includes a role in Identity database", vi: "IdentityDbContext bao gồm role trong Identity database" },
      { label: "D", en: "All of the others", vi: "Tất cả các đáp án khác" },
    ],
    answer: "D",
    explanation: "**Tất cả đều đúng**: `IdentityDbContext` là DbContext đầy đủ cho ASP.NET Core Identity, bao gồm tất cả các bảng: `AspNetUsers` (users), `AspNetRoles` (roles), `AspNetUserRoles`, `AspNetUserClaims`, `AspNetRoleClaims`, `AspNetUserLogins`, `AspNetUserTokens`."
  },
  {
    id: 57, chapter: "Ch08",
    en: "WCF Architecture includes:",
    vi: "Kiến trúc WCF bao gồm:",
    options: [
      { label: "A", en: "Contracts and Descriptions - Operations - Messaging - Hosting and Activation", vi: "Contracts and Descriptions - Operations - Messaging - Hosting and Activation" },
      { label: "B", en: "Message Options and Descriptions - Service Runtime - Operations - Hosting and Activation", vi: "Message Options and Descriptions - Service Runtime - Operations - Hosting and Activation" },
      { label: "C", en: "Contracts and Descriptions - Service Runtime - Messaging - Hosting and Activation", vi: "Contracts and Descriptions - Service Runtime - Messaging - Hosting and Activation" },
      { label: "D", en: "Contracts and Message Options - Service Runtime - Data - Hosting and Activation", vi: "Contracts and Message Options - Service Runtime - Data - Hosting and Activation" },
    ],
    answer: "C",
    explanation: "WCF Architecture gồm 4 layer: **Contracts and Descriptions** (ServiceContract, DataContract, MessageContract), **Service Runtime** (behavior, throttling, error handling), **Messaging** (encoding, transport, channels), **Hosting and Activation** (IIS, WAS, Windows Service, Self-hosting)."
  },
  {
    id: 58, chapter: "Ch01",
    en: "Which one is NOT an HTTP Verb?",
    vi: "Đâu KHÔNG phải là HTTP Verb?",
    options: [
      { label: "A", en: "HEAD", vi: "HEAD" },
      { label: "B", en: "TRACE", vi: "TRACE" },
      { label: "C", en: "OPTIONS", vi: "OPTIONS" },
      { label: "D", en: "CONNECT", vi: "CONNECT" },
      { label: "E", en: "GET", vi: "GET" },
      { label: "F", en: "LINK", vi: "LINK" },
    ],
    answer: "F",
    explanation: "HTTP methods chuẩn (RFC 7231): GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS, TRACE, CONNECT. **`LINK`** không phải HTTP method chuẩn hiện hành. HEAD = lấy headers không có body. OPTIONS = hỏi server hỗ trợ methods nào (dùng trong CORS preflight). CONNECT = tạo tunnel qua proxy."
  },
  {
    id: 59, chapter: "Ch01",
    en: "HTTP Request consists of: (Choose 4 answers)",
    vi: "HTTP Request bao gồm: (Chọn 4 đáp án)",
    options: [
      { label: "A", en: "Request line", vi: "Request line" },
      { label: "B", en: "Headers", vi: "Headers" },
      { label: "C", en: "An empty line", vi: "Một dòng trống" },
      { label: "D", en: "An optional message body", vi: "Message body tùy chọn" },
      { label: "E", en: "Footers", vi: "Footers" },
    ],
    answer: ["A", "B", "C", "D"],
    multi: true,
    explanation: "Cấu trúc **HTTP Request**: **A** - Request line (METHOD /path HTTP/version), **B** - Headers (key: value metadata), **C** - Empty line (CRLF, phân tách header và body), **D** - Optional body (payload, GET thường không có body). **Footers** (E) không phải thành phần chuẩn của HTTP Request."
  },
  {
    id: 60, chapter: "Ch01",
    en: "HTTP Response Status line includes: (Choose 2 answers)",
    vi: "Status line của HTTP Response bao gồm: (Chọn 2 đáp án)",
    options: [
      { label: "A", en: "Numeric status code", vi: "Mã status dạng số" },
      { label: "B", en: "Status headers", vi: "Status headers" },
      { label: "C", en: "Textual Reason phrase", vi: "Cụm từ lý do dạng văn bản" },
    ],
    answer: ["A", "C"],
    multi: true,
    explanation: "**HTTP Response Status line**: `HTTP/1.1 200 OK` gồm HTTP version + **Numeric status code** (A, vd: `200`, `404`) + **Textual Reason phrase** (C, vd: `OK`, `Not Found`). **\"Status headers\"** (B) không phải thuật ngữ chuẩn — headers là phần riêng biệt sau status line."
  },
  {
    id: 61, chapter: "Ch01",
    en: "Each HTTP Request can contain only one Header. True or False?",
    vi: "Mỗi HTTP Request chỉ có thể chứa một Header. Đúng hay Sai?",
    options: [
      { label: "A", en: "True", vi: "Đúng" },
      { label: "B", en: "False", vi: "Sai" },
    ],
    answer: "B",
    explanation: "**Sai**. Một HTTP Request có thể chứa **nhiều headers** (không giới hạn số lượng). Ví dụ: `Content-Type`, `Authorization`, `Accept`, `User-Agent`, `Cookie`, `Cache-Control`... đều là các headers riêng biệt trong cùng một request."
  },
  {
    id: 62, chapter: "Ch01",
    en: "HTTP Status Codes: Informational Response is which group?",
    vi: "HTTP Status Codes: Informational Response là nhóm nào?",
    options: [
      { label: "A", en: "1XX", vi: "1XX" },
      { label: "B", en: "2XX", vi: "2XX" },
      { label: "C", en: "3XX", vi: "3XX" },
      { label: "D", en: "4XX", vi: "4XX" },
      { label: "E", en: "5XX", vi: "5XX" },
    ],
    answer: "A",
    explanation: "HTTP Status Code groups: **1xx** = Informational, **2xx** = Success (200 OK, 201 Created, 204 No Content), **3xx** = Redirection (301, 304), **4xx** = Client Error (400, 401, 403, 404), **5xx** = Server Error (500, 503). Ví dụ 1xx: `100 Continue`, `101 Switching Protocols`."
  },
  {
    id: 63, chapter: "Ch01",
    en: "Which one is NOT a Characteristic of a REST based network?",
    vi: "Đâu KHÔNG phải là đặc điểm của mạng dựa trên REST?",
    options: [
      { label: "A", en: "Client-Server", vi: "Client-Server" },
      { label: "B", en: "Stateless", vi: "Stateless" },
      { label: "C", en: "Unidentifiable", vi: "Không thể nhận dạng" },
      { label: "D", en: "Cache", vi: "Cache" },
      { label: "E", en: "Uniform interface", vi: "Giao diện đồng nhất" },
      { label: "F", en: "Named resources", vi: "Tài nguyên có tên" },
      { label: "G", en: "Interconnected resource representations", vi: "Biểu diễn tài nguyên liên kết nhau" },
    ],
    answer: "C",
    explanation: "REST constraints: Client-Server, Stateless, Cacheable, Uniform Interface, Layered System, Code on Demand. Tài nguyên trong REST phải **identifiable** (có thể nhận dạng) qua URI — ngược lại với 'Unidentifiable'. Named Resources và Interconnected representations đều là đặc điểm của REST."
  },
  {
    id: 64, chapter: "Ch01",
    en: "In REST, Client-Server means:",
    vi: "Trong REST, Client-Server có nghĩa là:",
    options: [
      { label: "A", en: "A pull-based interaction style — Client requests data from servers as and when needed.", vi: "Kiểu tương tác pull-based — Client yêu cầu dữ liệu từ server khi cần." },
      { label: "B", en: "A push-based interaction style — Servers push data to Client when it needs.", vi: "Kiểu tương tác push-based — Server đẩy dữ liệu đến Client khi cần." },
    ],
    answer: "A",
    explanation: "**Client-Server trong REST** là **pull-based**: client chủ động gửi request khi cần data, server thụ động phản hồi. Ngược với push-based (server tự gửi) như WebSocket hay Server-Sent Events. REST thuần túy = request-response, client kéo data về khi cần."
  },
  {
    id: 65, chapter: "Ch01",
    en: "Choose the correct information about REST.",
    vi: "Chọn thông tin đúng về REST.",
    options: [
      { label: "A", en: "REST web services communicate over HTTP using HTTP vocabulary.", vi: "REST web services giao tiếp qua HTTP và dùng đúng \"từ vựng\" HTTP." },
      { label: "B", en: "REST is an architectural pattern, not a strict specification.", vi: "REST là một phong cách kiến trúc, không phải đặc tả cứng." },
      { label: "C", en: "REST stands for Representational State Transfer.", vi: "REST là viết tắt của Representational State Transfer." },
      { label: "D", en: "All of the others.", vi: "Tất cả các ý trên." },
    ],
    answer: "D",
    explanation: "Đáp án đúng là **D** vì A/B/C đều đúng. Nhìn theo góc backend: REST tận dụng chuẩn HTTP (method, status code, header), tập trung vào resource và stateless request."
  },
  {
    id: 66, chapter: "Ch01",
    en: "What is the significance of resources in RESTful APIs?",
    vi: "Ý nghĩa của resource trong RESTful API là gì?",
    options: [
      { label: "A", en: "Resources represent data entities exposed by the API.", vi: "Resource đại diện cho các thực thể dữ liệu mà API công khai." },
      { label: "B", en: "Resources are the network endpoints of the API.", vi: "Resource là endpoint mạng của API." },
      { label: "C", en: "Resources are methods and operations provided by the API.", vi: "Resource là các phương thức và thao tác của API." },
      { label: "D", en: "Resources are communication protocols used by the API.", vi: "Resource là giao thức truyền thông của API." },
    ],
    answer: "A",
    explanation: "Trong REST, trọng tâm là **resource** (vd: `users`, `orders`) và URI định danh resource. HTTP method (GET/POST/PUT/DELETE) mới là thứ biểu diễn thao tác lên resource."
  },
  {
    id: 67, chapter: "Ch02",
    en: "Choose suitable reasons for choosing .NET for Web Services.",
    vi: "Chọn lý do phù hợp để dùng .NET cho Web Services.",
    options: [
      { label: "A", en: "Cross-platform.", vi: "Đa nền tảng." },
      { label: "B", en: "Good fit for microservices.", vi: "Phù hợp cho kiến trúc microservices." },
      { label: "C", en: "Side-by-side .NET versions per application.", vi: "Mỗi ứng dụng có thể chạy side-by-side phiên bản .NET riêng." },
      { label: "D", en: "All of the others.", vi: "Tất cả các ý trên." },
    ],
    answer: "D",
    explanation: "Đáp án **D**. .NET hiện đại chạy tốt Linux/Windows, hỗ trợ container, cloud-native và version isolation theo từng app nên rất hợp bài toán service backend."
  },
  {
    id: 68, chapter: "Ch10",
    en: "Which one is not communication style in microservices?",
    vi: "Đâu không phải là kiểu giao tiếp trong microservices?",
    options: [
      { label: "A", en: "Synchronous messaging.", vi: "Giao tiếp đồng bộ." },
      { label: "B", en: "Asynchronous messaging.", vi: "Giao tiếp bất đồng bộ." },
      { label: "C", en: "Concurrency messaging.", vi: "Concurrency messaging." },
      { label: "D", en: "None of the others.", vi: "Không có đáp án nào." },
    ],
    answer: "C",
    explanation: "Thông thường microservices có 2 kiểu chính: sync (request/response qua HTTP/gRPC) và async (queue/event bus). **Concurrency messaging** không phải thuật ngữ chuẩn cho kiểu giao tiếp."
  },
  {
    id: 69, chapter: "Ch04",
    en: "To test AutoMapper mappings, what should you call in a unit test?",
    vi: "Để test mapping của AutoMapper, nên gọi gì trong unit test?",
    options: [
      { label: "A", en: "var config = AutoMapperConfiguration.Configure(); config.AssertConfigurationIsValid();", vi: "var config = AutoMapperConfiguration.Configure(); config.AssertConfigurationIsValid();" },
      { label: "B", en: "var config = AutoMapperConfiguration.Configure(); config.AssertConfigurationIsNotValid();", vi: "var config = AutoMapperConfiguration.Configure(); config.AssertConfigurationIsNotValid();" },
      { label: "C", en: "var config = AutoMapperConfiguration.Configure(); config.AssertAllConfigurationIsValid();", vi: "var config = AutoMapperConfiguration.Configure(); config.AssertAllConfigurationIsValid();" },
      { label: "D", en: "var config = AutoMapperConfiguration.Configure(); config.AssertConfigurationIsValid(true);", vi: "var config = AutoMapperConfiguration.Configure(); config.AssertConfigurationIsValid(true);" },
    ],
    answer: "A",
    explanation: "Đáp án đúng là **A**. `AssertConfigurationIsValid()` giúp fail sớm khi mapping sai field/type, rất hữu ích để tránh lỗi runtime khi map DTO."
  },
  {
    id: 70, chapter: "Ch07",
    en: "What are static files in an ASP.NET Core API project?",
    vi: "Static files trong dự án ASP.NET Core API gồm những gì?",
    options: [
      { label: "A", en: "Images", vi: "Ảnh" },
      { label: "B", en: "HTML files", vi: "File HTML" },
      { label: "C", en: "CSS files", vi: "File CSS" },
      { label: "D", en: "JavaScript files", vi: "File JavaScript" },
      { label: "E", en: "All of the others", vi: "Tất cả các ý trên" },
    ],
    answer: "E",
    explanation: "Static files là tài nguyên được serve trực tiếp, không qua xử lý business logic. Trong ASP.NET Core, thường nằm ở `wwwroot` và bật qua `app.UseStaticFiles()`."
  },
  {
    id: 71, chapter: "Ch03",
    en: "Which HTTP header specifies preferred media types in a request?",
    vi: "HTTP header nào chỉ định media type mong muốn trong request?",
    options: [
      { label: "A", en: "Accept", vi: "Accept" },
      { label: "B", en: "Content-Type", vi: "Content-Type" },
      { label: "C", en: "Authorization", vi: "Authorization" },
      { label: "D", en: "Cache-Control", vi: "Cache-Control" },
    ],
    answer: "A",
    explanation: "`Accept` nói cho server biết client muốn nhận format nào (JSON/XML...). `Content-Type` là kiểu dữ liệu của body gửi lên server."
  },
  {
    id: 72, chapter: "Ch03",
    en: "What is the default media type used by JsonMediaTypeFormatter in Web API?",
    vi: "Media type mặc định của JsonMediaTypeFormatter trong Web API là gì?",
    options: [
      { label: "A", en: "application/json", vi: "application/json" },
      { label: "B", en: "text/xml", vi: "text/xml" },
      { label: "C", en: "application/xml", vi: "application/xml" },
      { label: "D", en: "application/x-www-form-urlencoded", vi: "application/x-www-form-urlencoded" },
    ],
    answer: "A",
    explanation: "Json formatter mặc định serialize sang **JSON**, nên media type chuẩn là `application/json`. Đây cũng là format phổ biến nhất cho REST API hiện nay."
  },
  {
    id: 73, chapter: "Ch03",
    en: "What are media type formatters in ASP.NET Core Web API?",
    vi: "Media type formatter trong ASP.NET Core Web API là gì?",
    options: [
      { label: "A", en: "Classes responsible for serializing/deserializing data.", vi: "Các class chịu trách nhiệm serialize/deserialize dữ liệu." },
      { label: "B", en: "Components that make the API unable to understand request format.", vi: "Thành phần khiến API không hiểu format request." },
      { label: "C", en: "XmlMediaTypeFormatter handles HTML form URL-encoded data.", vi: "XmlMediaTypeFormatter xử lý HTML form URL-encoded." },
      { label: "D", en: "JsonMediaTypeFormatter handles both XML and JSON.", vi: "JsonMediaTypeFormatter xử lý cả XML và JSON." },
    ],
    answer: "A",
    explanation: "Formatter là lớp chuyển đổi object <-> wire format (JSON/XML...). Nếu thiếu formatter phù hợp, API có thể trả `415 Unsupported Media Type` hoặc không bind được model."
  },
  {
    id: 74, chapter: "Ch08",
    en: "WCF endpoint includes which components?",
    vi: "WCF endpoint gồm những thành phần nào?",
    options: [
      { label: "A", en: "Address", vi: "Address" },
      { label: "B", en: "Binding", vi: "Binding" },
      { label: "C", en: "Contract", vi: "Contract" },
      { label: "D", en: "All of the others", vi: "Tất cả các ý trên" },
    ],
    answer: "D",
    explanation: "Mô hình **ABC** của WCF: Address (ở đâu), Binding (giao tiếp kiểu gì), Contract (service cung cấp gì). Thiếu 1 trong 3 thì endpoint không hoàn chỉnh."
  },
  {
    id: 75, chapter: "Ch08",
    en: "Which WCF binding is commonly used for building RESTful services?",
    vi: "WCF binding nào thường dùng để xây RESTful services?",
    options: [
      { label: "A", en: "BasicHttpBinding", vi: "BasicHttpBinding" },
      { label: "B", en: "NetTcpBinding", vi: "NetTcpBinding" },
      { label: "C", en: "WebHttpBinding", vi: "WebHttpBinding" },
      { label: "D", en: "WSHttpBinding", vi: "WSHttpBinding" },
    ],
    answer: "C",
    explanation: "`WebHttpBinding` được thiết kế cho HTTP-style service theo hướng REST. Các binding còn lại thường nghiêng về SOAP hoặc giao thức khác."
  },
  {
    id: 76, chapter: "Ch08",
    en: "MessageContract can be applied to:",
    vi: "MessageContract có thể áp dụng cho:",
    options: [
      { label: "A", en: "Interface", vi: "Interface" },
      { label: "B", en: "Class", vi: "Class" },
      { label: "C", en: "Method", vi: "Method" },
      { label: "D", en: "Service", vi: "Service" },
    ],
    answer: "B",
    explanation: "`[MessageContract]` đặt trên **class** để kiểm soát cấu trúc SOAP message (header/body) ở mức chi tiết."
  },
  {
    id: 77, chapter: "Ch06",
    en: "Authorization is the process of:",
    vi: "Authorization là quá trình gì?",
    options: [
      { label: "A", en: "Verifying the identity of a user or client.", vi: "Xác minh danh tính user/client." },
      { label: "B", en: "Granting access to specific resources or actions.", vi: "Cấp quyền truy cập tài nguyên hoặc hành động cụ thể." },
      { label: "C", en: "Encrypting sensitive data during transmission.", vi: "Mã hóa dữ liệu nhạy cảm khi truyền." },
      { label: "D", en: "Logging activities for auditing.", vi: "Ghi log hoạt động để audit." },
    ],
    answer: "B",
    explanation: "Phân biệt rõ: **Authentication** = bạn là ai, **Authorization** = bạn được làm gì. Trong ASP.NET Core, authorization thường dựa trên claims/roles/policies."
  },
  {
    id: 78, chapter: "Ch06",
    en: "Which authentication middleware is commonly used with ASP.NET Core Identity?",
    vi: "Middleware xác thực nào thường dùng với ASP.NET Core Identity?",
    options: [
      { label: "A", en: "UseAuthentication", vi: "UseAuthentication" },
      { label: "B", en: "UseAuthorization", vi: "UseAuthorization" },
      { label: "C", en: "UseRouting", vi: "UseRouting" },
      { label: "D", en: "UseEndpoints", vi: "UseEndpoints" },
    ],
    answer: "A",
    explanation: "`UseAuthentication()` đọc credential/token và tạo `HttpContext.User`. Sau đó `UseAuthorization()` mới dùng user này để kiểm tra policy/role."
  },
  {
    id: 79, chapter: "Ch06",
    en: "What is the purpose of the [AllowAnonymous] attribute in ASP.NET Core?",
    vi: "Mục đích của attribute [AllowAnonymous] trong ASP.NET Core là gì?",
    options: [
      { label: "A", en: "Allow anonymous access to an action method, overriding authentication rules.", vi: "Cho phép truy cập ẩn danh vào action, ghi đè rule xác thực." },
      { label: "B", en: "Specify multiple authentication schemes for an action.", vi: "Chỉ định nhiều authentication scheme cho action." },
      { label: "C", en: "Skip model validation for an action.", vi: "Bỏ qua model validation cho action." },
      { label: "D", en: "Handle global exceptions in controller.", vi: "Xử lý exception toàn cục trong controller." },
    ],
    answer: "A",
    explanation: "`[AllowAnonymous]` thường dùng cho endpoint public như login/register/health check, kể cả khi controller đang có `[Authorize]`."
  },
  {
    id: 80, chapter: "Ch06",
    en: "What is the purpose of the [Authorize] attribute in ASP.NET Core Web API?",
    vi: "Mục đích của attribute [Authorize] trong ASP.NET Core Web API là gì?",
    options: [
      { label: "A", en: "Create and manage user accounts.", vi: "Tạo và quản lý user account." },
      { label: "B", en: "Enable authentication/authorization checks for action or controller.", vi: "Bật kiểm tra xác thực/phân quyền cho action hoặc controller." },
      { label: "C", en: "Define custom exception handling.", vi: "Định nghĩa xử lý exception tùy chỉnh." },
      { label: "D", en: "Skip authorization during debugging.", vi: "Bỏ qua authorization khi debug." },
    ],
    answer: "B",
    explanation: "`[Authorize]` bảo vệ endpoint và chỉ cho phép request đã qua auth phù hợp policy/role/claim. Đây là lớp bảo vệ bắt buộc cho API nhạy cảm."
  },
  {
    id: 81, chapter: "Ch09",
    en: "How do gRPC and REST differ in terms of communication protocol?",
    vi: "gRPC và REST khác nhau thế nào về giao thức truyền thông?",
    options: [
      { label: "A", en: "gRPC uses HTTP/1.1, REST uses HTTP/2.", vi: "gRPC dùng HTTP/1.1, REST dùng HTTP/2." },
      { label: "B", en: "gRPC uses HTTP/2, REST commonly uses HTTP/1.1.", vi: "gRPC dùng HTTP/2, REST thường dùng HTTP/1.1." },
      { label: "C", en: "gRPC uses TCP, REST uses UDP.", vi: "gRPC dùng TCP, REST dùng UDP." },
      { label: "D", en: "gRPC uses WebSocket, REST uses MQTT.", vi: "gRPC dùng WebSocket, REST dùng MQTT." },
    ],
    answer: "B",
    explanation: "gRPC yêu cầu HTTP/2 để tận dụng multiplexing/streaming. REST truyền thống chủ yếu HTTP/1.1 (dù vẫn có thể chạy trên HTTP/2)."
  },
  {
    id: 82, chapter: "Ch05",
    en: "What is the purpose of the $filter query option in OData?",
    vi: "Mục đích của query option $filter trong OData là gì?",
    options: [
      { label: "A", en: "Request only specific properties.", vi: "Chỉ lấy một số thuộc tính cụ thể." },
      { label: "B", en: "Perform filtering operations on entity collections.", vi: "Thực hiện lọc dữ liệu trên tập entity." },
      { label: "C", en: "Update or modify existing entities.", vi: "Cập nhật entity hiện có." },
      { label: "D", en: "Sort returned entities.", vi: "Sắp xếp entity trả về." },
    ],
    answer: "B",
    explanation: "`$filter` dùng để lọc theo điều kiện, ví dụ: `/Products?$filter=Price gt 100 and IsActive eq true`."
  },
  {
    id: 83, chapter: "Ch05",
    en: "What is the purpose of an OData controller in ASP.NET Core Web API?",
    vi: "Mục đích của OData controller trong ASP.NET Core Web API là gì?",
    options: [
      { label: "A", en: "Handle routing and URL mapping only.", vi: "Chỉ xử lý routing và ánh xạ URL." },
      { label: "B", en: "Provide authentication and authorization only.", vi: "Chỉ cung cấp xác thực và phân quyền." },
      { label: "C", en: "Serialize/deserialize data format only.", vi: "Chỉ serialize/deserialize dữ liệu." },
      { label: "D", en: "Expose OData endpoints and handle OData query options.", vi: "Expose OData endpoint và xử lý các query option OData." },
    ],
    answer: "D",
    explanation: "OData controller cho phép client query động với `$select/$filter/$expand/$orderby/...` trên endpoint chuẩn, giảm số lượng endpoint phải viết tay."
  },
  {
    id: 84, chapter: "Ch04",
    en: "Choose the correct information about async return types in ASP.NET Web API.",
    vi: "Chọn thông tin đúng về kiểu trả về async trong ASP.NET Web API.",
    options: [
      { label: "A", en: "Task<TResult> for async methods that return a value.", vi: "Task<TResult> cho async method có giá trị trả về." },
      { label: "B", en: "Task for async methods without return value.", vi: "Task cho async method không trả về giá trị." },
      { label: "C", en: "void can be used for event handlers.", vi: "void có thể dùng cho event handler." },
      { label: "D", en: "All of the others.", vi: "Tất cả các ý trên." },
      { label: "E", en: "None of the others.", vi: "Không có ý nào đúng." },
    ],
    answer: "D",
    explanation: "Best practice cho API vẫn là `Task` hoặc `Task<T>`. `async void` chỉ nên dùng cho event handler vì không await/không bắt lỗi theo luồng chuẩn."
  },
  {
    id: 85, chapter: "Ch04",
    en: "What is the role of Web API controllers?",
    vi: "Vai trò của Web API controller là gì?",
    options: [
      { label: "A", en: "Handling user authentication only.", vi: "Chỉ xử lý xác thực người dùng." },
      { label: "B", en: "Managing database operations only.", vi: "Chỉ quản lý thao tác database." },
      { label: "C", en: "Handling HTTP requests and producing HTTP responses.", vi: "Nhận HTTP request và trả HTTP response." },
      { label: "D", en: "Rendering server-side views/templates.", vi: "Render view/template phía server." },
    ],
    answer: "C",
    explanation: "Controller là entry point của request pipeline ở tầng presentation API. Business logic nên đẩy xuống service layer để code dễ test và bảo trì."
  },
  {
    id: 86, chapter: "Ch04",
    en: "Which namespace must be imported to use ControllerBase?",
    vi: "Cần import namespace nào để dùng ControllerBase?",
    options: [
      { label: "A", en: "System.Net", vi: "System.Net" },
      { label: "B", en: "System.Web", vi: "System.Web" },
      { label: "C", en: "Microsoft.AspNetCore.Mvc", vi: "Microsoft.AspNetCore.Mvc" },
      { label: "D", en: "System.Web.Mvc", vi: "System.Web.Mvc" },
    ],
    answer: "C",
    explanation: "`ControllerBase` thuộc namespace `Microsoft.AspNetCore.Mvc`. Đây là base class phù hợp cho Web API (không có view support như `Controller`)."
  },
  {
    id: 87, chapter: "Ch04",
    en: "How can you include route parameters in Attribute Routing?",
    vi: "Làm thế nào để đưa route parameter vào Attribute Routing?",
    options: [
      { label: "A", en: "Use curly braces around parameter names in route templates.", vi: "Dùng dấu ngoặc nhọn quanh tên parameter trong route template." },
      { label: "B", en: "Use square brackets around parameter names.", vi: "Dùng ngoặc vuông quanh tên parameter." },
      { label: "C", en: "Use [RouteParam] before parameter in action method.", vi: "Dùng [RouteParam] trước parameter trong action method." },
      { label: "D", en: "Put parameter name directly without braces.", vi: "Ghi tên parameter trực tiếp không cần ngoặc." },
    ],
    answer: "A",
    explanation: "Cú pháp chuẩn: `[HttpGet(\"{id}\")]`, `[Route(\"orders/{orderId}/items/{itemId}\")]`. Có thể thêm constraint như `{id:int}` để validate route sớm."
  },
  {
    id: 88, chapter: "Ch04",
    en: "What is complex type binding?",
    vi: "Complex type binding là gì?",
    options: [
      { label: "A", en: "POST/PUT usually use complex type binding to send model data.", vi: "POST/PUT thường dùng complex type binding để nhận model data." },
      { label: "B", en: "You can combine primitive and complex types, e.g. id in query and body model for update.", vi: "Có thể kết hợp primitive + complex, ví dụ id ở query và object trong body khi update." },
      { label: "C", en: "Both A and B are correct.", vi: "Cả A và B đều đúng." },
      { label: "D", en: "Both A and B are incorrect.", vi: "Cả A và B đều sai." },
    ],
    answer: "C",
    explanation: "Đáp án **C**. Thực tế API update thường nhận `id` từ route/query và payload object từ body; model binding sẽ map dữ liệu từ nhiều nguồn vào parameter/action model."
  },
  {
    id: 89, chapter: "Ch04",
    en: "Which statement is true about routing middleware in ASP.NET Core Web API?",
    vi: "Phát biểu nào đúng về routing middleware trong ASP.NET Core Web API?",
    options: [
      { label: "A", en: "Routing applies only to GET requests.", vi: "Routing chỉ áp dụng cho GET." },
      { label: "B", en: "Routing applies only to POST requests.", vi: "Routing chỉ áp dụng cho POST." },
      { label: "C", en: "Routing applies to all HTTP methods.", vi: "Routing áp dụng cho mọi HTTP method." },
      { label: "D", en: "Routing is not supported in ASP.NET Core Web API.", vi: "ASP.NET Core Web API không hỗ trợ routing." },
    ],
    answer: "C",
    explanation: "Routing match endpoint dựa trên template + HTTP method metadata, nên GET/POST/PUT/PATCH/DELETE đều đi qua cùng cơ chế routing."
  },
  {
    id: 90, chapter: "Ch04",
    en: "To force clients to set a value, which annotation is correct for a nullable property?",
    vi: "Để bắt buộc client phải truyền giá trị cho property nullable, annotation nào đúng?",
    options: [
      { label: "A", en: "[Required] public decimal? Price { get; set; }", vi: "[Required] public decimal? Price { get; set; }" },
      { label: "B", en: "[RequireAttribute(0, 999)] public decimal? Price { get; set; }", vi: "[RequireAttribute(0, 999)] public decimal? Price { get; set; }" },
      { label: "C", en: "[RequiredRange(0, 999)] public decimal? Price { get; set; }", vi: "[RequiredRange(0, 999)] public decimal? Price { get; set; }" },
      { label: "D", en: "[RequiredNotNull] public decimal? Price { get; set; }", vi: "[RequiredNotNull] public decimal? Price { get; set; }" },
    ],
    answer: "A",
    explanation: "`decimal?` cho phép null ở mức type, nhưng `[Required]` buộc input không được null khi model validation chạy."
  },
  {
    id: 91, chapter: "Ch04",
    en: "Which pattern can be used with DTOs to simplify object mapping?",
    vi: "Pattern nào thường đi kèm DTO để đơn giản hóa mapping object?",
    options: [
      { label: "A", en: "Singleton Pattern", vi: "Singleton Pattern" },
      { label: "B", en: "Observer Pattern", vi: "Observer Pattern" },
      { label: "C", en: "Factory Pattern", vi: "Factory Pattern" },
      { label: "D", en: "Mapper Pattern", vi: "Mapper Pattern" },
    ],
    answer: "D",
    explanation: "Mapper pattern (thường qua AutoMapper hoặc mapping thủ công) tách biệt domain model và contract DTO, giảm leak dữ liệu nội bộ ra API."
  },
  {
    id: 92, chapter: "Ch04",
    en: "What are Data Transfer Objects (DTOs)?",
    vi: "Data Transfer Objects (DTOs) là gì?",
    options: [
      { label: "A", en: "Classes that define response/request models with possible validation.", vi: "Class mô tả model cho request/response, có thể kèm validation." },
      { label: "B", en: "They are similar to ViewModels in MVC for exposing relevant fields only.", vi: "Tương tự ViewModel trong MVC, chỉ expose dữ liệu cần thiết." },
      { label: "C", en: "Both statements are incorrect.", vi: "Cả hai ý đều sai." },
      { label: "D", en: "Both statements are correct.", vi: "Cả hai ý đều đúng." },
    ],
    answer: "D",
    explanation: "DTO là object nhẹ để trao đổi dữ liệu qua boundary (API/message). Mục tiêu là rõ contract, giảm coupling và kiểm soát dữ liệu public."
  },
  {
    id: 93, chapter: "Ch04",
    en: "When validation fails, which property is commonly checked in controller actions?",
    vi: "Khi validation fail, controller thường kiểm tra property nào?",
    options: [
      { label: "A", en: "ModelState.IsValid", vi: "ModelState.IsValid" },
      { label: "B", en: "ModelState.IsCorrect", vi: "ModelState.IsCorrect" },
      { label: "C", en: "ModelState.IsVerify", vi: "ModelState.IsVerify" },
      { label: "D", en: "ModelState == true", vi: "ModelState == true" },
    ],
    answer: "A",
    explanation: "`ModelState.IsValid` là cờ chuẩn để biết data annotations pass/fail. Trong `[ApiController]`, framework còn có thể tự trả 400 khi model invalid."
  },
  {
    id: 94, chapter: "Ch01",
    en: "What is REST API?",
    vi: "REST API là gì?",
    options: [
      { label: "A", en: "An API that follows REST constraints and enables interaction with RESTful web services.", vi: "API tuân theo các ràng buộc REST và cho phép tương tác với RESTful web services." },
      { label: "B", en: "An API for RESTful services without constraints.", vi: "API cho RESTful services nhưng không có ràng buộc." },
      { label: "C", en: "An API that follows REST constraints but does not allow interaction.", vi: "API tuân REST nhưng không cho tương tác." },
      { label: "D", en: "An API style that does not allow interaction with web services.", vi: "Một kiểu API không cho tương tác với web services." },
    ],
    answer: "A",
    explanation: "REST API thực tế là HTTP API thiết kế quanh resource + method semantics + stateless + cacheability + uniform interface."
  },
  {
    id: 95, chapter: "Ch07",
    en: "Which JavaScript object is used to call ASP.NET Core Web API in classic approach?",
    vi: "Theo cách truyền thống, object JavaScript nào dùng để gọi ASP.NET Core Web API?",
    options: [
      { label: "A", en: "XMLHttpRequest (XHR)", vi: "XMLHttpRequest (XHR)" },
      { label: "B", en: "XMLHttpResponse (XHR)", vi: "XMLHttpResponse (XHR)" },
      { label: "C", en: "XMLHttpRequestObject", vi: "XMLHttpRequestObject" },
      { label: "D", en: "XMLHttpResponseObject", vi: "XMLHttpResponseObject" },
    ],
    answer: "A",
    explanation: "Cổ điển là `XMLHttpRequest`; hiện đại hơn dùng `fetch()` hoặc thư viện như axios để code gọn và dễ xử lý Promise/async-await."
  },
  {
    id: 96, chapter: "Ch07",
    en: "To call ASP.NET Core Web API with JavaScript, which Startup.Configure code is needed for static/default files?",
    vi: "Để gọi ASP.NET Core Web API bằng JavaScript, cần đoạn nào trong Startup.Configure để bật static/default files?",
    options: [
      { label: "A", en: "public void Configure(IApplicationBuilder app, IWebHostEnvironment env) { app.UseDefaultFiles(); app.UseStaticFiles(); }", vi: "public void Configure(IApplicationBuilder app, IWebHostEnvironment env) { app.UseDefaultFiles(); app.UseStaticFiles(); }" },
      { label: "B", en: "public void ConfigureServices(IApplicationBuilder app, IWebHostEnvironment env) { app.UseStaticFiles(); }", vi: "public void ConfigureServices(IApplicationBuilder app, IWebHostEnvironment env) { app.UseStaticFiles(); }" },
      { label: "C", en: "public void ConfigureServices(IServiceCollection app) { app.UseDefaultFiles(); app.UseStaticFiles(); }", vi: "public void ConfigureServices(IServiceCollection app) { app.UseDefaultFiles(); app.UseStaticFiles(); }" },
      { label: "D", en: "public void Configure(IServiceCollection app) { app.UseDefaultFiles(); app.UseStaticFiles(); }", vi: "public void Configure(IServiceCollection app) { app.UseDefaultFiles(); app.UseStaticFiles(); }" },
    ],
    answer: "A",
    explanation: "`UseDefaultFiles` và `UseStaticFiles` là middleware pipeline nên đặt trong `Configure`, không phải `ConfigureServices`."
  },
  {
    id: 97, chapter: "Ch03",
    en: "If an HTTP request has no Accept header and server supports XML and JSON, what is the default response format?",
    vi: "Nếu request không có header Accept và server hỗ trợ cả XML lẫn JSON, format phản hồi mặc định là gì?",
    options: [
      { label: "A", en: "XML", vi: "XML" },
      { label: "B", en: "JSON", vi: "JSON" },
      { label: "C", en: "HTML", vi: "HTML" },
      { label: "D", en: "Server error", vi: "Lỗi server" },
    ],
    answer: "B",
    explanation: "Trong cấu hình ASP.NET Core phổ biến, JSON formatter đứng mặc định nên response thường là JSON khi client không nêu rõ `Accept`."
  },
  {
    id: 98, chapter: "Ch06",
    en: "Choose the correct information about security with RESTful Web Services.",
    vi: "Chọn thông tin đúng về bảo mật với RESTful Web Services.",
    options: [
      { label: "A", en: "Validate all inputs on server to prevent injection attacks.", vi: "Validate toàn bộ input phía server để chống injection." },
      { label: "B", en: "Use session-based authentication where suitable.", vi: "Có thể dùng session-based authentication trong một số bối cảnh phù hợp." },
      { label: "C", en: "Never place sensitive data like username/password/token in URL.", vi: "Không đưa dữ liệu nhạy cảm như username/password/token vào URL." },
      { label: "D", en: "All of the others.", vi: "Tất cả các ý trên." },
      { label: "E", en: "None of the others.", vi: "Không có ý nào đúng." },
    ],
    answer: "D",
    explanation: "A/B/C đều là nguyên tắc bảo mật thực tế. Ngoài ra production nên dùng HTTPS bắt buộc, rate limit, audit log và rotate secret định kỳ."
  },
  {
    id: 99, chapter: "Ch09",
    en: "What is the role of Protocol Buffers in gRPC with C#?",
    vi: "Vai trò của Protocol Buffers trong gRPC với C# là gì?",
    options: [
      { label: "A", en: "Used for data serialization and communication between client and server.", vi: "Dùng để serialize dữ liệu và giao tiếp giữa client-server." },
      { label: "B", en: "Used for UI rendering in C# applications.", vi: "Dùng để render UI trong ứng dụng C#." },
      { label: "C", en: "Used for database management in C# applications.", vi: "Dùng để quản lý database trong ứng dụng C#." },
      { label: "D", en: "Used for logging and monitoring in C# applications.", vi: "Dùng để logging và monitoring trong ứng dụng C#." },
    ],
    answer: "A",
    explanation: "Protobuf định nghĩa contract trong `.proto` rồi generate strongly-typed client/server code. Ưu điểm: payload nhị phân gọn, parse nhanh, giảm băng thông so với JSON."
  },
  {
    id: 100, chapter: "Ch06",
    en: "Which of the following is typically used for user authentication in a RESTful Web Service?",
    vi: "Cách nào sau đây thường dùng để xác thực người dùng trong RESTful Web Service?",
    options: [
      { label: "A", en: "API keys", vi: "API keys" },
      { label: "B", en: "JSON Web Tokens (JWT)", vi: "JSON Web Tokens (JWT)" },
      { label: "C", en: "OAuth2", vi: "OAuth2" },
      { label: "D", en: "SSL/TLS certificates", vi: "SSL/TLS certificates" },
    ],
    answer: "B",
    explanation: "Trong thực tế API hiện đại, **JWT** rất phổ biến cho user auth vì stateless, dễ scale và tích hợp tốt với SPA/mobile. OAuth2 thường là framework cấp quyền ở mức cao hơn."
  },
  {
    id: 101, chapter: "Ch06",
    en: "Which of the following is a security issue with web services?",
    vi: "Đâu là vấn đề bảo mật của web services?",
    options: [
      { label: "A", en: "Confidentiality", vi: "Confidentiality" },
      { label: "B", en: "Authentication", vi: "Authentication" },
      { label: "C", en: "Network Security", vi: "Network Security" },
      { label: "D", en: "Cyber Security", vi: "Cyber Security" },
      { label: "E", en: "All of the others", vi: "Tất cả các ý trên" },
      { label: "F", en: "None of the others", vi: "Không có ý nào" },
    ],
    answer: "E",
    explanation: "Bảo mật web service là bài toán tổng hợp: xác thực, phân quyền, bảo mật đường truyền, bảo vệ dữ liệu và hạ tầng mạng. Nên đáp án là **All of the others**."
  },
  {
    id: 102, chapter: "Ch09",
    en: "Choose the correct information about Protocol Buffers.",
    vi: "Chọn thông tin đúng về Protocol Buffers.",
    options: [
      { label: "A", en: "Protocol Buffers (Protobuf) is Google’s technology for serializing structured data.", vi: "Protocol Buffers (Protobuf) là công nghệ của Google để serialize dữ liệu có cấu trúc." },
      { label: "B", en: "Parsing Protobuf binary format is typically less CPU-intensive than text formats.", vi: "Parse binary Protobuf thường ít tốn CPU hơn format text." },
      { label: "C", en: "All of the others.", vi: "Tất cả các ý trên." },
      { label: "D", en: "None of the others.", vi: "Không có ý nào đúng." },
    ],
    answer: "C",
    explanation: "A và B đều đúng: Protobuf là format nhị phân hiệu quả, phù hợp service-to-service call tần suất cao (như gRPC)."
  },
  {
    id: 103, chapter: "Ch09",
    en: "Which statement about streaming in gRPC is true?",
    vi: "Phát biểu nào đúng về streaming trong gRPC?",
    options: [
      { label: "A", en: "gRPC only supports client-side streaming.", vi: "gRPC chỉ hỗ trợ client-side streaming." },
      { label: "B", en: "gRPC only supports server-side streaming.", vi: "gRPC chỉ hỗ trợ server-side streaming." },
      { label: "C", en: "gRPC supports both client-side and server-side streaming.", vi: "gRPC hỗ trợ cả client-side và server-side streaming." },
      { label: "D", en: "gRPC does not support streaming.", vi: "gRPC không hỗ trợ streaming." },
    ],
    answer: "C",
    explanation: "gRPC hỗ trợ đủ 3 kiểu: server streaming, client streaming và bidirectional streaming. Đây là lợi thế lớn so với REST truyền thống."
  },
  {
    id: 104, chapter: "Ch05",
    en: "What does this OData query retrieve: /Orders?$filter=OrderItems/all(item: item/Quantity ge 10)?",
    vi: "Query OData này trả về gì: /Orders?$filter=OrderItems/all(item: item/Quantity ge 10)?",
    options: [
      { label: "A", en: "Orders with all items having quantity >= 10.", vi: "Đơn hàng mà tất cả item đều có số lượng >= 10." },
      { label: "B", en: "Orders with any item having quantity >= 10.", vi: "Đơn hàng có ít nhất một item số lượng >= 10." },
      { label: "C", en: "Orders with all items having quantity < 10.", vi: "Đơn hàng mà tất cả item đều có số lượng < 10." },
      { label: "D", en: "Orders with any item having quantity < 10.", vi: "Đơn hàng có ít nhất một item số lượng < 10." },
    ],
    answer: "A",
    explanation: "`all(...)` nghĩa là điều kiện phải đúng với **mọi** phần tử trong collection. Nếu dùng `any(...)` mới là \"ít nhất một\"."
  },
  {
    id: 105, chapter: "Ch05",
    en: "What is the purpose of the $expand query option in OData?",
    vi: "Mục đích của query option $expand trong OData là gì?",
    options: [
      { label: "A", en: "Filter data by conditions.", vi: "Lọc dữ liệu theo điều kiện." },
      { label: "B", en: "Include related entities in query results.", vi: "Include các entity liên quan trong kết quả." },
      { label: "C", en: "Limit number of returned records.", vi: "Giới hạn số record trả về." },
      { label: "D", en: "Perform aggregation on data.", vi: "Thực hiện tổng hợp dữ liệu." },
    ],
    answer: "B",
    explanation: "`$expand` tương đương ý tưởng eager loading relation qua URL, giúp lấy entity chính và navigation entity cùng lúc."
  },
  {
    id: 106, chapter: "Ch05",
    en: "Which class is responsible for registering the Entity Data Model and enabling OData endpoints in ASP.NET Core Web API?",
    vi: "Class nào chịu trách nhiệm đăng ký Entity Data Model và bật OData endpoint trong ASP.NET Core Web API?",
    options: [
      { label: "A", en: "DbContext", vi: "DbContext" },
      { label: "B", en: "Startup", vi: "Startup" },
      { label: "C", en: "ApiController", vi: "ApiController" },
      { label: "D", en: "ODataController", vi: "ODataController" },
    ],
    answer: "B",
    explanation: "Theo mô hình cấu hình truyền thống, OData được đăng ký trong `Startup` (`ConfigureServices`/`Configure`) để map route và model."
  },
  {
    id: 107, chapter: "Ch06",
    en: "What is the purpose of app.UseAuthorization() middleware in ASP.NET Core Web API?",
    vi: "Mục đích của middleware app.UseAuthorization() trong ASP.NET Core Web API là gì?",
    options: [
      { label: "A", en: "Authenticate and log incoming requests.", vi: "Xác thực và ghi log request." },
      { label: "B", en: "Check authorization based on claims/roles/policies.", vi: "Kiểm tra phân quyền dựa trên claims/roles/policies." },
      { label: "C", en: "Parse request body into model.", vi: "Phân tích body request vào model." },
      { label: "D", en: "Log response status codes and exceptions.", vi: "Ghi log status code và exception." },
    ],
    answer: "B",
    explanation: "`UseAuthorization()` quyết định user đã xác thực có quyền truy cập endpoint hay không. Nó phải đi sau `UseAuthentication()`."
  },
  {
    id: 108, chapter: "Ch04",
    en: "Which statement is true about middleware in ASP.NET Core Web API?",
    vi: "Phát biểu nào đúng về middleware trong ASP.NET Core Web API?",
    options: [
      { label: "A", en: "Middleware can only be added once in an application.", vi: "Middleware chỉ thêm được một lần." },
      { label: "B", en: "Middleware runs only before request processing.", vi: "Middleware chỉ chạy trước khi xử lý request." },
      { label: "C", en: "Middleware runs only after response processing.", vi: "Middleware chỉ chạy sau khi xử lý response." },
      { label: "D", en: "Multiple middleware components can be ordered to form a pipeline.", vi: "Có thể thêm nhiều middleware và sắp thứ tự để tạo pipeline." },
    ],
    answer: "D",
    explanation: "ASP.NET Core hoạt động theo middleware pipeline. Thứ tự đăng ký rất quan trọng vì quyết định luồng request/response."
  },
  {
    id: 109, chapter: "Ch03",
    en: "What is the default data format used by Web API for communication?",
    vi: "Định dạng dữ liệu mặc định Web API thường dùng để giao tiếp là gì?",
    options: [
      { label: "A", en: "JSON", vi: "JSON" },
      { label: "B", en: "XML", vi: "XML" },
      { label: "C", en: "CSV", vi: "CSV" },
      { label: "D", en: "Plain text", vi: "Plain text" },
    ],
    answer: "A",
    explanation: "JSON là mặc định phổ biến vì nhẹ, dễ parse ở frontend và tương thích tốt với hệ sinh thái web hiện đại."
  },
  {
    id: 110, chapter: "Ch04",
    en: "Choose the incorrect information about async programming with ASP.NET Web API.",
    vi: "Chọn thông tin sai về async programming với ASP.NET Web API.",
    options: [
      { label: "A", en: "Async can run work separately from the main thread.", vi: "Async có thể xử lý công việc tách khỏi main thread." },
      { label: "B", en: "Async cannot notify the main thread whether execution succeeds or fails.", vi: "Async không thể thông báo kết quả thành công/thất bại cho main thread." },
      { label: "C", en: "Async can improve application responsiveness.", vi: "Async có thể cải thiện độ phản hồi ứng dụng." },
      { label: "D", en: "Async can help avoid performance bottlenecks.", vi: "Async giúp giảm nghẽn hiệu năng." },
    ],
    answer: "B",
    explanation: "B là sai. Với `await`, kết quả/exception được propagate về caller rõ ràng qua `Task`/`Task<T>`."
  },
  {
    id: 111, chapter: "Ch04",
    en: "Where should UseRouting middleware typically be added in Startup?",
    vi: "UseRouting middleware nên được đặt ở đâu trong Startup?",
    options: [
      { label: "A", en: "Inside ConfigureServices.", vi: "Trong ConfigureServices." },
      { label: "B", en: "Before UseEndpoints.", vi: "Trước UseEndpoints." },
      { label: "C", en: "After UseAuthentication only.", vi: "Chỉ sau UseAuthentication." },
      { label: "D", en: "Anywhere in Configure.", vi: "Đặt ở đâu trong Configure cũng được." },
    ],
    answer: "B",
    explanation: "Pipeline chuẩn: `UseRouting()` -> `UseAuthentication()` -> `UseAuthorization()` -> `UseEndpoints(...)`."
  },
  {
    id: 112, chapter: "Ch04",
    en: "Choose the correct information for validating model properties.",
    vi: "Chọn thông tin đúng về validate property của model.",
    options: [
      { label: "A", en: "Use attributes from System.ComponentModel.DataAnnotations namespace.", vi: "Dùng attribute từ namespace System.ComponentModel.DataAnnotations." },
      { label: "B", en: "Use attributes from System.DataManagementModel.DataAnnotations namespace.", vi: "Dùng attribute từ namespace System.DataManagementModel.DataAnnotations." },
      { label: "C", en: "Both answers are correct.", vi: "Cả hai đều đúng." },
      { label: "D", en: "Both answers are incorrect.", vi: "Cả hai đều sai." },
    ],
    answer: "A",
    explanation: "Data annotations chuẩn trong .NET nằm ở `System.ComponentModel.DataAnnotations` như `[Required]`, `[Range]`, `[StringLength]`."
  },
  {
    id: 113, chapter: "Ch04",
    en: "Which statement is true about DTOs (Data Transfer Objects)?",
    vi: "Phát biểu nào đúng về DTOs (Data Transfer Objects)?",
    options: [
      { label: "A", en: "DTOs are typically mutable objects.", vi: "DTO thường là object mutable." },
      { label: "B", en: "DTOs should contain complex business logic and validation rules.", vi: "DTO nên chứa business logic phức tạp." },
      { label: "C", en: "DTOs should mirror database table structure exactly.", vi: "DTO nên mirror y hệt cấu trúc bảng DB." },
      { label: "D", en: "DTOs are lightweight objects for data transfer and should not contain behavior.", vi: "DTO là object nhẹ để truyền dữ liệu và không nên chứa behavior." },
    ],
    answer: "D",
    explanation: "DTO nên tối giản, chỉ chứa dữ liệu cần trao đổi qua API boundary; logic nghiệp vụ để ở domain/service layer."
  },
  {
    id: 114, chapter: "Ch01",
    en: "What is the role of URI (Uniform Resource Identifier) in RESTful APIs?",
    vi: "Vai trò của URI trong RESTful API là gì?",
    options: [
      { label: "A", en: "Define the structure of data models.", vi: "Định nghĩa cấu trúc data model." },
      { label: "B", en: "Provide unique identifiers for resources.", vi: "Cung cấp định danh duy nhất cho resource." },
      { label: "C", en: "Determine allowed HTTP methods.", vi: "Quy định HTTP method được phép." },
      { label: "D", en: "Define security and authentication settings.", vi: "Định nghĩa cấu hình bảo mật và xác thực." },
    ],
    answer: "B",
    explanation: "Trong REST, URI định danh resource (vd `/api/users/123`). HTTP method quyết định thao tác lên resource đó."
  },
  {
    id: 115, chapter: "Ch01",
    en: "Which status code is typically returned when a resource is successfully created?",
    vi: "Status code nào thường trả về khi tạo resource thành công?",
    options: [
      { label: "A", en: "200 (OK)", vi: "200 (OK)" },
      { label: "B", en: "201 (Created)", vi: "201 (Created)" },
      { label: "C", en: "204 (No Content)", vi: "204 (No Content)" },
      { label: "D", en: "400 (Bad Request)", vi: "400 (Bad Request)" },
    ],
    answer: "B",
    explanation: "Theo REST convention, tạo mới thành công nên trả **201 Created**, thường kèm `Location` header trỏ tới resource mới."
  },
  {
    id: 116, chapter: "Ch10",
    en: "What is not a microservice attribute?",
    vi: "Đâu không phải thuộc tính của microservice?",
    options: [
      { label: "A", en: "Independent deployment", vi: "Triển khai độc lập" },
      { label: "B", en: "Technology adoption flexibility", vi: "Linh hoạt chọn công nghệ" },
      { label: "C", en: "Consistency and resiliency", vi: "Tính nhất quán và khả năng phục hồi" },
      { label: "D", en: "Combined functionality", vi: "Gộp chức năng thành khối lớn" },
    ],
    answer: "D",
    explanation: "Microservice hướng tới tách nhỏ theo business capability, không phải gộp nhiều chức năng vào một khối lớn như monolith."
  },
  {
    id: 117, chapter: "Ch04",
    en: "Which component is executed on each request in ASP.NET Core Web API?",
    vi: "Thành phần nào được chạy trên mỗi request trong ASP.NET Core Web API?",
    options: [
      { label: "A", en: "Startup class constructor", vi: "Constructor của Startup class" },
      { label: "B", en: "Middlewares", vi: "Middlewares" },
      { label: "C", en: "Main method", vi: "Main method" },
      { label: "D", en: "All of the others", vi: "Tất cả các ý trên" },
    ],
    answer: "B",
    explanation: "Mỗi request đi qua middleware pipeline. `Main` và startup init chỉ chạy khi app khởi động."
  },
  {
    id: 118, chapter: "Ch07",
    en: "Which statement is correct about jQuery in the context of calling ASP.NET Core Web API?",
    vi: "Phát biểu nào đúng về jQuery trong ngữ cảnh gọi ASP.NET Core Web API?",
    options: [
      { label: "A", en: "jQuery is a JavaScript library that can call Web APIs.", vi: "jQuery là thư viện JavaScript có thể gọi Web API." },
      { label: "B", en: "jQuery is a simple template for calling Web APIs.", vi: "jQuery là một template đơn giản để gọi Web API." },
      { label: "C", en: "jQuery is a JSON library.", vi: "jQuery là thư viện JSON." },
      { label: "D", en: "jQuery is a JSON template.", vi: "jQuery là template JSON." },
    ],
    answer: "A",
    explanation: "jQuery cung cấp `$.ajax`, `$.get`, `$.post` để gọi HTTP API. Dù vậy ở codebase mới thường ưu tiên `fetch`/axios."
  },
  {
    id: 119, chapter: "Ch03",
    en: "What is not the purpose of a Media Formatter in web development?",
    vi: "Đâu không phải mục đích của Media Formatter trong web development?",
    options: [
      { label: "A", en: "Format data into specific media type for HTTP responses.", vi: "Format dữ liệu theo media type cho HTTP response." },
      { label: "B", en: "Format data into specific media type for HTTP requests.", vi: "Xử lý dữ liệu theo media type cho HTTP request." },
      { label: "C", en: "Serialize and deserialize objects between client and server.", vi: "Serialize và deserialize object giữa client-server." },
      { label: "D", en: "Define data types for attribute routing.", vi: "Định nghĩa kiểu dữ liệu cho attribute routing." },
    ],
    answer: "D",
    explanation: "Media formatter làm việc với payload format (JSON/XML...). Route constraint/routing type không phải trách nhiệm của formatter."
  },
  {
    id: 120, chapter: "Ch07",
    en: "Choose the correct XMLHttpRequest (XHR) usage to call a Web API.",
    vi: "Chọn cách dùng XMLHttpRequest (XHR) đúng để gọi Web API.",
    options: [
      { label: "A", en: "var xhttp = new XMLHttpRequest(); xhttp.open(\"POST\", \"https://localhost:44324/api/ApiControllerName\", true); xhttp.sendpost();", vi: "var xhttp = new XMLHttpRequest(); xhttp.open(\"POST\", \"https://localhost:44324/api/ApiControllerName\", true); xhttp.sendpost();" },
      { label: "B", en: "var xhttp = new XMLHttpRequest(); xhttp.open(\"GET\", \"https://localhost:44324/api/ApiControllerName\", true); xhttp.send();", vi: "var xhttp = new XMLHttpRequest(); xhttp.open(\"GET\", \"https://localhost:44324/api/ApiControllerName\", true); xhttp.send();" },
      { label: "C", en: "var xhttp = new XMLHttpRequest(); xhttp.openurl(\"GET\", \"https://localhost:44324/api/ApiControllerName\", true); xhttp.sendrequest();", vi: "var xhttp = new XMLHttpRequest(); xhttp.openurl(\"GET\", \"https://localhost:44324/api/ApiControllerName\", true); xhttp.sendrequest();" },
      { label: "D", en: "var xhttp = new XMLHttpRequest(); xhttp.openurl(\"GET\", \"https://localhost:44324/api/ApiControllerName\", true); xhttp.send();", vi: "var xhttp = new XMLHttpRequest(); xhttp.openurl(\"GET\", \"https://localhost:44324/api/ApiControllerName\", true); xhttp.send();" },
    ],
    answer: "B",
    explanation: "Cú pháp đúng của XHR là `open(method, url, async)` và `send(...)`. `openurl()` hay `sendpost()` không phải API thật của `XMLHttpRequest`."
  },
  {
    id: 121, chapter: "Ch04",
    en: "If a request is simple and values are in URL (int/string/bool/GUID/decimal), which model binding is used?",
    vi: "Nếu request đơn giản và giá trị nằm trên URL (int/string/bool/GUID/decimal), kiểu model binding nào được dùng?",
    options: [
      { label: "A", en: "Complex model binder", vi: "Complex model binder" },
      { label: "B", en: "Combination model binding", vi: "Combination model binding" },
      { label: "C", en: "Primitive model binding", vi: "Primitive model binding" },
      { label: "D", en: "Extraction model binder", vi: "Extraction model binder" },
    ],
    answer: "C",
    explanation: "Giá trị primitive thường bind trực tiếp từ route/query string. Complex binder chủ yếu dùng cho object nhiều field từ body/form."
  },
  {
    id: 122, chapter: "Ch04",
    en: "What is the role of Model in ASP.NET Core MVC?",
    vi: "Vai trò của Model trong ASP.NET Core MVC là gì?",
    options: [
      { label: "A", en: "Models represent domain/business data and may include logic to manage that data.", vi: "Model biểu diễn dữ liệu domain/business và có thể chứa logic quản lý dữ liệu đó." },
      { label: "B", en: "Models are only data containers used by Controllers.", vi: "Model chỉ là nơi chứa dữ liệu dùng bởi Controller." },
      { label: "C", en: "Both A and B", vi: "Cả A và B" },
      { label: "D", en: "Neither A nor B", vi: "Không câu nào đúng" },
    ],
    answer: "A",
    explanation: "Trong tư duy MVC chuẩn, Model không chỉ là cái \"túi dữ liệu\" mà còn đại diện cho domain/state nghiệp vụ. B mô tả quá hẹp."
  },
  {
    id: 123, chapter: "Ch04",
    en: "Choose the correct information about ControllerBase in ASP.NET Core Web API.",
    vi: "Chọn thông tin đúng về ControllerBase trong ASP.NET Core Web API.",
    options: [
      { label: "A", en: "A base class for an MVC controller without view support.", vi: "Là class nền cho controller, không có hỗ trợ View." },
      { label: "B", en: "The context associated with current request.", vi: "Là context gắn với request hiện tại." },
      { label: "C", en: "The context associated with current session.", vi: "Là context gắn với session hiện tại." },
      { label: "D", en: "A base class for an MVC controller without model support.", vi: "Là class nền cho controller nhưng không hỗ trợ model." },
    ],
    answer: "A",
    explanation: "`ControllerBase` là nền cho Web API controller: có routing/model binding/result helpers, nhưng không có view rendering như `Controller`."
  },
  {
    id: 124, chapter: "Ch06",
    en: "What are authentication and authorization?",
    vi: "Authentication và Authorization là gì?",
    options: [
      { label: "A", en: "Authentication determines what users can access.", vi: "Authentication xác định user được truy cập gì." },
      { label: "B", en: "None of the others.", vi: "Không đáp án nào." },
      { label: "C", en: "Authorization is done before authentication.", vi: "Authorization làm trước authentication." },
      { label: "D", en: "Authorization verifies who users are.", vi: "Authorization xác minh user là ai." },
      { label: "E", en: "Authentication verifies access rights while authorization verifies identity.", vi: "Authentication kiểm tra quyền truy cập còn authorization kiểm tra danh tính." },
      { label: "F", en: "Authentication verifies identity; authorization verifies what the user can access.", vi: "Authentication xác minh danh tính; authorization xác minh quyền truy cập." },
    ],
    answer: "F",
    explanation: "Quy tắc dễ nhớ: **AuthN** (authentication) = \"bạn là ai\", **AuthZ** (authorization) = \"bạn được làm gì\"."
  },
  {
    id: 125, chapter: "Ch09",
    en: "What is the serialization format used by gRPC?",
    vi: "gRPC dùng định dạng serialization nào?",
    options: [
      { label: "A", en: "YAML", vi: "YAML" },
      { label: "B", en: "JSON", vi: "JSON" },
      { label: "C", en: "XML", vi: "XML" },
      { label: "D", en: "Protocol Buffers", vi: "Protocol Buffers" },
    ],
    answer: "D",
    explanation: "gRPC mặc định dùng Protobuf để encode message dạng nhị phân, payload gọn và nhanh hơn JSON/XML trong service-to-service call."
  },
  {
    id: 126, chapter: "Ch04",
    en: "What is a Model in ASP.NET Core Web API?",
    vi: "Model trong ASP.NET Core Web API là gì?",
    options: [
      { label: "A", en: "Used only to set data.", vi: "Chỉ dùng để set dữ liệu." },
      { label: "B", en: "A C# class (.cs) that can contain properties and methods.", vi: "Là class C# (.cs) có thể chứa properties và methods." },
      { label: "C", en: "None of the others.", vi: "Không đáp án nào." },
      { label: "D", en: "All of the others.", vi: "Tất cả đáp án." },
    ],
    answer: "B",
    explanation: "Model là kiểu dữ liệu ứng dụng dùng cho binding/validation/domain transfer, không bị giới hạn \"chỉ set data\" như A."
  },
  {
    id: 127, chapter: "Ch09",
    en: "How are gRPC services registered and configured in ASP.NET Core?",
    vi: "gRPC services được đăng ký và cấu hình trong ASP.NET Core như thế nào?",
    options: [
      { label: "A", en: "By adding appSettings.json only.", vi: "Chỉ bằng appSettings.json." },
      { label: "B", en: "By modifying Global.asax.", vi: "Sửa Global.asax." },
      { label: "C", en: "In ConfigureServices of a Controller class.", vi: "Trong ConfigureServices của Controller class." },
      { label: "D", en: "In ConfigureServices of Startup (or Program in minimal hosting).", vi: "Trong ConfigureServices của Startup (hoặc Program ở minimal hosting)." },
    ],
    answer: "D",
    explanation: "Với mô hình Startup cũ: `services.AddGrpc()`. Sau đó map endpoint bằng `endpoints.MapGrpcService<T>()` hoặc `app.MapGrpcService<T>()`."
  },
  {
    id: 128, chapter: "Ch04",
    en: "What is the primary role of ASP.NET Web API?",
    vi: "Vai trò chính của ASP.NET Web API là gì?",
    options: [
      { label: "A", en: "Handle HTTP requests/responses and build RESTful APIs.", vi: "Xử lý HTTP request/response và xây RESTful API." },
      { label: "B", en: "Server-side form validation only.", vi: "Chỉ kiểm tra form phía server." },
      { label: "C", en: "Manage database connections directly.", vi: "Quản lý kết nối DB trực tiếp." },
      { label: "D", en: "Serve dynamic web pages.", vi: "Phục vụ trang web động." },
    ],
    answer: "A",
    explanation: "Web API tập trung expose endpoint HTTP cho client (web/mobile/service khác), không phải framework render UI."
  },
  {
    id: 129, chapter: "Ch09",
    en: "Choose the correct Protocol Buffers syntax for defining service and messages.",
    vi: "Chọn cú pháp Protocol Buffers đúng để định nghĩa service và message.",
    options: [
      { label: "A", en: "syntax = \"proto3\"; message Greeter { rpc SayHello (HelloRequest) returns (HelloReply); } service HelloRequest { string name = 1; } service HelloReply { string message = 1; }", vi: "syntax = \"proto3\"; message Greeter { rpc SayHello (HelloRequest) returns (HelloReply); } service HelloRequest { string name = 1; } service HelloReply { string message = 1; }" },
      { label: "B", en: "syntax = \"proto3\"; service Greeter { rpc SayHello (HelloRequest) returns (HelloReply); } message HelloRequest { string name = 1; } message HelloReply { string message = 1; }", vi: "syntax = \"proto3\"; service Greeter { rpc SayHello (HelloRequest) returns (HelloReply); } message HelloRequest { string name = 1; } message HelloReply { string message = 1; }" },
      { label: "C", en: "None of the others.", vi: "Không đáp án nào." },
      { label: "D", en: "syntax = \"proto3\"; service Greeter { rpc SayHello (HelloRequest) replies (HelloReply); } message HelloRequest { string name = 1; } message HelloReply { string message = 1; }", vi: "syntax = \"proto3\"; service Greeter { rpc SayHello (HelloRequest) replies (HelloReply); } message HelloRequest { string name = 1; } message HelloReply { string message = 1; }" },
    ],
    answer: "B",
    explanation: "Trong `.proto`, `service` chứa RPC method và `message` chứa schema dữ liệu. Từ khóa đúng là `returns`, không phải `replies`."
  },
  {
    id: 130, chapter: "Ch04",
    en: "Which statement is true about the [HttpGet] attribute in ASP.NET Core Web API?",
    vi: "Phát biểu nào đúng về [HttpGet] trong ASP.NET Core Web API?",
    options: [
      { label: "A", en: "It defines route template only.", vi: "Nó chỉ định nghĩa route template." },
      { label: "B", en: "It specifies that the route handles GET requests.", vi: "Nó chỉ định route chỉ xử lý GET request." },
      { label: "C", en: "It maps route to all HTTP methods.", vi: "Nó map route cho mọi HTTP method." },
      { label: "D", en: "It is not supported in attribute routing.", vi: "Nó không được hỗ trợ trong attribute routing." },
    ],
    answer: "B",
    explanation: "`[HttpGet]` gắn action với verb GET. Có thể kèm template như `[HttpGet(\"{id}\")]`."
  },
  {
    id: 131, chapter: "Ch10",
    en: "Which environment variable is commonly used to specify ASP.NET Core environment?",
    vi: "Biến môi trường nào thường dùng để chỉ định ASP.NET Core environment?",
    options: [
      { label: "A", en: "DOTNET_ENVIRONMENT", vi: "DOTNET_ENVIRONMENT" },
      { label: "B", en: "ENVIRONMENT", vi: "ENVIRONMENT" },
      { label: "C", en: "APP_ENV", vi: "APP_ENV" },
      { label: "D", en: "ASPNETCORE_ENVIRONMENT", vi: "ASPNETCORE_ENVIRONMENT" },
    ],
    answer: "D",
    explanation: "`ASPNETCORE_ENVIRONMENT` là biến quen thuộc để phân môi trường `Development`, `Staging`, `Production` trong ASP.NET Core."
  },
  {
    id: 132, chapter: "Ch09",
    en: "Which NuGet package is required to create gRPC services in ASP.NET Core?",
    vi: "NuGet package nào cần để tạo gRPC services trong ASP.NET Core?",
    options: [
      { label: "A", en: "Grpc.AspNetCore", vi: "Grpc.AspNetCore" },
      { label: "B", en: "Microsoft.AspNetCore.WebSockets", vi: "Microsoft.AspNetCore.WebSockets" },
      { label: "C", en: "Microsoft.AspNetCore.Razor", vi: "Microsoft.AspNetCore.Razor" },
      { label: "D", en: "Microsoft.AspNetCore.Mvc", vi: "Microsoft.AspNetCore.Mvc" },
    ],
    answer: "A",
    explanation: "Để host gRPC service trên ASP.NET Core, package trọng tâm là `Grpc.AspNetCore` (cùng toolchain protobuf/grpc)."
  },
  {
    id: 133, chapter: "Ch08",
    en: "Which attribute is used to mark a class as a data contract in WCF?",
    vi: "Attribute nào dùng để đánh dấu class là data contract trong WCF?",
    options: [
      { label: "A", en: "[DataContract]", vi: "[DataContract]" },
      { label: "B", en: "[ServiceContract]", vi: "[ServiceContract]" },
      { label: "C", en: "[MessageContract]", vi: "[MessageContract]" },
      { label: "D", en: "[DataMember]", vi: "[DataMember]" },
    ],
    answer: "A",
    explanation: "`[DataContract]` đặt trên class, còn `[DataMember]` đặt trên property/field muốn serialize trong contract."
  },
  {
    id: 134, chapter: "Ch04",
    en: "Which method in ControllerBase is used to redirect to another action/controller?",
    vi: "Method nào trong ControllerBase dùng để redirect sang action/controller khác?",
    options: [
      { label: "A", en: "View()", vi: "View()" },
      { label: "B", en: "RedirectToAction()", vi: "RedirectToAction()" },
      { label: "C", en: "PartialView()", vi: "PartialView()" },
      { label: "D", en: "RedirectToPageResult()", vi: "RedirectToPageResult()" },
    ],
    answer: "B",
    explanation: "`RedirectToAction()` trả về response redirect đến action khác. `View()`/`PartialView()` thuộc ngữ cảnh MVC view rendering."
  },
  {
    id: 135, chapter: "Ch01",
    en: "Which HTTP response code represents a successful request in REST?",
    vi: "HTTP response code nào biểu diễn request thành công trong REST?",
    options: [
      { label: "A", en: "300 (Multiple Choices)", vi: "300 (Multiple Choices)" },
      { label: "B", en: "200 (OK)", vi: "200 (OK)" },
      { label: "C", en: "400 (Bad Request)", vi: "400 (Bad Request)" },
      { label: "D", en: "500 (Internal Server Error)", vi: "500 (Internal Server Error)" },
    ],
    answer: "B",
    explanation: "`200 OK` là status thành công phổ biến nhất cho GET/PUT/PATCH/DELETE tùy ngữ cảnh. Tạo mới thường dùng `201 Created`."
  },
  {
    id: 136, chapter: "Ch05",
    en: "What is the Entity Data Model (EDM) in OData ASP.NET Core Web API?",
    vi: "Entity Data Model (EDM) trong OData ASP.NET Core Web API là gì?",
    options: [
      { label: "A", en: "A model describing structure and relationships of OData entities.", vi: "Mô hình mô tả cấu trúc và quan hệ giữa các entity OData." },
      { label: "B", en: "A physical database schema for storage.", vi: "Schema database vật lý để lưu trữ." },
      { label: "C", en: "A serialization library only.", vi: "Chỉ là thư viện serialize." },
      { label: "D", en: "A framework for building REST APIs.", vi: "Framework để xây REST API." },
    ],
    answer: "A",
    explanation: "EDM là metadata model cho OData endpoint: entity set, property, key, navigation. Client dựa vào đó để query đúng."
  },
  {
    id: 137, chapter: "Ch10",
    en: "Which Docker command is used to run a .NET container image?",
    vi: "Lệnh Docker nào dùng để chạy image container .NET?",
    options: [
      { label: "A", en: "docker run", vi: "docker run" },
      { label: "B", en: "docker build", vi: "docker build" },
      { label: "C", en: "docker stop", vi: "docker stop" },
      { label: "D", en: "docker push", vi: "docker push" },
    ],
    answer: "A",
    explanation: "`docker run` tạo và khởi chạy container từ image. `build` để build image, `push` để đẩy lên registry."
  },
  {
    id: 138, chapter: "Ch05",
    en: "Which OData query filters products to retrieve those with any related orders?",
    vi: "Query OData nào lọc products để lấy các product có ít nhất một order liên quan?",
    options: [
      { label: "A", en: "/Products?$filter=Any(Orders)", vi: "/Products?$filter=Any(Orders)" },
      { label: "B", en: "/Products?$filter=Any(Orders eq true)", vi: "/Products?$filter=Any(Orders eq true)" },
      { label: "C", en: "/Products?$filter=All(Orders eq true)", vi: "/Products?$filter=All(Orders eq true)" },
      { label: "D", en: "/Products?$filter=All(Orders)", vi: "/Products?$filter=All(Orders)" },
    ],
    answer: "A",
    explanation: "Ý tưởng đúng là dùng `any` để kiểm tra \"tồn tại phần tử\" trong collection liên quan. Cú pháp production thường thấy: `Orders/any()` hoặc `Orders/any(o: ...)`."
  },
  {
    id: 139, chapter: "Ch03",
    en: "Which statement is true about format-specific action results in ASP.NET Core Web API?",
    vi: "Phát biểu nào đúng về format-specific action results trong ASP.NET Core Web API?",
    options: [
      { label: "A", en: "They allow returning different response formats based on client preferred media type.", vi: "Cho phép trả format khác nhau dựa trên media type client mong muốn." },
      { label: "B", en: "They are for routing and URL mapping only.", vi: "Chỉ dành cho routing và URL mapping." },
      { label: "C", en: "They provide authentication and authorization.", vi: "Chúng cung cấp authentication/authorization." },
      { label: "D", en: "They are the serialization engine itself.", vi: "Chúng chính là engine serialization." },
    ],
    answer: "A",
    explanation: "Format-specific results phối hợp với content negotiation để phản hồi đúng representation theo `Accept` header."
  },
  {
    id: 140, chapter: "Ch06",
    en: "What does the [EnableCors] attribute do in ASP.NET Core Web API?",
    vi: "Attribute [EnableCors] làm gì trong ASP.NET Core Web API?",
    options: [
      { label: "A", en: "Enable CORS globally for all endpoints.", vi: "Bật CORS toàn cục cho mọi endpoint." },
      { label: "B", en: "Control cache behavior of CORS responses.", vi: "Điều khiển cache của response CORS." },
      { label: "C", en: "Define only allowed origins in all cases.", vi: "Chỉ định riêng allowed origins trong mọi trường hợp." },
      { label: "D", en: "Enable CORS for a specific controller or action.", vi: "Bật CORS cho controller/action cụ thể." },
    ],
    answer: "D",
    explanation: "`[EnableCors]` dùng khi muốn áp policy CORS ở mức hẹp thay vì toàn app. Thực tế cần khai báo policy name trong cấu hình CORS."
  },
  {
    id: 141, chapter: "Ch04",
    en: "Which attributes specify HTTP verbs for controller actions in ASP.NET Core?",
    vi: "Những attribute nào dùng để chỉ định HTTP verb cho controller action trong ASP.NET Core?",
    options: [
      { label: "A", en: "[Get], [Post], [Put], [Delete]", vi: "[Get], [Post], [Put], [Delete]" },
      { label: "B", en: "[HttpGET], [HttpPOST], [HttpPUT], [HttpDELETE]", vi: "[HttpGET], [HttpPOST], [HttpPUT], [HttpDELETE]" },
      { label: "C", en: "[HttpGet], [HttpPost], [HttpPut], [HttpDelete]", vi: "[HttpGet], [HttpPost], [HttpPut], [HttpDelete]" },
      { label: "D", en: "[HttpGetAttribute], [HttpPostAttribute], [HttpPutAttribute], [HttpDeleteAttribute] only", vi: "Chỉ [HttpGetAttribute], [HttpPostAttribute], [HttpPutAttribute], [HttpDeleteAttribute]" },
    ],
    answer: "C",
    explanation: "C là cách dùng phổ biến và chuẩn trong code hằng ngày. Dù dạng đầy đủ `HttpGetAttribute` tồn tại, dev thường dùng alias ngắn `[HttpGet]`."
  },
  {
    id: 142, chapter: "Ch04",
    en: "What is the purpose of the Primitive Model Binder in ASP.NET Core Web API?",
    vi: "Mục đích của Primitive Model Binder trong ASP.NET Core Web API là gì?",
    options: [
      { label: "A", en: "Validate model properties.", vi: "Validate property của model." },
      { label: "B", en: "Bind complex nested models.", vi: "Bind model phức tạp nhiều tầng." },
      { label: "C", en: "Handle query string only.", vi: "Chỉ xử lý query string." },
      { label: "D", en: "Bind primitive types like string/int/bool/etc.", vi: "Bind kiểu dữ liệu primitive như string/int/bool..." },
    ],
    answer: "D",
    explanation: "Primitive binder xử lý dữ liệu đơn giản từ route/query/form/header và convert sang kiểu .NET tương ứng."
  },
  {
    id: 143, chapter: "Ch04",
    en: "Which information is true about ASP.NET Core Web API architecture?",
    vi: "Thông tin nào đúng về kiến trúc ASP.NET Core Web API?",
    options: [
      { label: "A", en: "Designed with task-based async model end-to-end.", vi: "Được thiết kế với mô hình async theo Task từ đầu đến cuối." },
      { label: "B", en: "Many elements can be customized via custom implementations.", vi: "Có thể tùy biến nhiều thành phần bằng implementation riêng." },
      { label: "C", en: "All of the others.", vi: "Tất cả các ý trên." },
      { label: "D", en: "Can be hosted in IIS and also self-hosted.", vi: "Có thể host trên IIS và cả self-host." },
    ],
    answer: "C",
    explanation: "A/B/D đều đúng trong thực tế kiến trúc ASP.NET Core Web API, nên đáp án tổng hợp là C."
  },
  {
    id: 144, chapter: "Ch08",
    en: "Which message exchange pattern is NOT supported in WCF?",
    vi: "Mẫu message exchange nào KHÔNG được hỗ trợ trong WCF?",
    options: [
      { label: "A", en: "Request-reply", vi: "Request-reply" },
      { label: "B", en: "Duplex", vi: "Duplex" },
      { label: "C", en: "Multi-way", vi: "Multi-way" },
      { label: "D", en: "One-way", vi: "One-way" },
    ],
    answer: "C",
    explanation: "WCF hỗ trợ One-way, Request-Reply và Duplex. `Multi-way` không phải pattern chuẩn trong WCF contracts."
  },
  {
    id: 145, chapter: "Ch08",
    en: "Which behavior type should be configured to return exception details from a WCF service?",
    vi: "Cần cấu hình loại behavior nào để trả exception detail từ WCF service?",
    options: [
      { label: "A", en: "ServiceBehavior", vi: "ServiceBehavior" },
      { label: "B", en: "EndpointBehavior", vi: "EndpointBehavior" },
      { label: "C", en: "MessageBehavior", vi: "MessageBehavior" },
      { label: "D", en: "OperationBehavior", vi: "OperationBehavior" },
    ],
    answer: "A",
    explanation: "Chi tiết lỗi WCF thường cấu hình ở service behavior (vd `ServiceDebugBehavior.IncludeExceptionDetailInFaults`)."
  },
  {
    id: 146, chapter: "Ch04",
    en: "Choose the correct information about ModelState.",
    vi: "Chọn thông tin đúng về ModelState.",
    options: [
      { label: "A", en: "All of the others.", vi: "Tất cả các ý trên." },
      { label: "B", en: "ModelState contains errors from model binding and model validation.", vi: "ModelState chứa lỗi từ model binding và model validation." },
      { label: "C", en: "Model binding errors are often conversion errors.", vi: "Lỗi từ model binding thường là lỗi chuyển đổi kiểu dữ liệu." },
      { label: "D", en: "None of the others.", vi: "Không có ý nào đúng." },
    ],
    answer: "A",
    explanation: "B và C đều đúng: ModelState gom lỗi parse/bind (vd `abc` -> int) và lỗi validation annotation."
  },
  {
    id: 147, chapter: "Ch03",
    en: "What is JSON? (Choose 2 answers)",
    vi: "JSON là gì? (Chọn 2 đáp án)",
    options: [
      { label: "A", en: "Especially designed to store and transport data.", vi: "Được thiết kế để lưu trữ và truyền dữ liệu." },
      { label: "B", en: "A lightweight format designed to store and transport data.", vi: "Là format nhẹ để lưu trữ và truyền dữ liệu." },
      { label: "C", en: "Used to represent structured information like documents, data, and config.", vi: "Dùng để biểu diễn thông tin có cấu trúc như tài liệu, dữ liệu, config." },
      { label: "D", en: "Similar to HTML and allows creating custom tags.", vi: "Giống HTML và cho phép tạo custom tag." },
    ],
    answer: ["B", "C"],
    multi: true,
    explanation: "JSON là format dữ liệu text nhẹ, rất phù hợp trao đổi dữ liệu API. Nó không phải ngôn ngữ đánh dấu kiểu HTML/XML nên D sai."
  },
  {
    id: 148, chapter: "Ch03",
    en: "Which open-source library is used by Web API for JSON serialization (classic context)?",
    vi: "Thư viện mã nguồn mở nào được Web API dùng cho JSON serialization (ngữ cảnh classic)?",
    options: [
      { label: "A", en: "Json.NET", vi: "Json.NET" },
      { label: "B", en: "System.Text.Json", vi: "System.Text.Json" },
      { label: "C", en: "System.Data.Json.NET", vi: "System.Data.Json.NET" },
      { label: "D", en: "Microsoft.Extensions.Json.NET", vi: "Microsoft.Extensions.Json.NET" },
    ],
    answer: "A",
    explanation: "Trong ASP.NET Web API cổ điển, Json.NET (Newtonsoft.Json) là lựa chọn mặc định phổ biến. ASP.NET Core mới hỗ trợ mạnh `System.Text.Json`."
  },
  {
    id: 149, chapter: "Ch05",
    en: "Which query function is NOT supported as a standard OData string function?",
    vi: "Hàm query nào KHÔNG phải hàm chuỗi OData chuẩn?",
    options: [
      { label: "A", en: "startswith(name,'a')", vi: "startswith(name,'a')" },
      { label: "B", en: "contains(name,'sample')", vi: "contains(name,'sample')" },
      { label: "C", en: "containsignorecase(name,'Sample')", vi: "containsignorecase(name,'Sample')" },
      { label: "D", en: "endswith(name,'Inc.')", vi: "endswith(name,'Inc.')" },
    ],
    answer: "C",
    explanation: "Các hàm chuẩn thường gặp: `startswith`, `endswith`, `contains`, `tolower`, `toupper`, `length`... `containsignorecase` không phải tên hàm chuẩn OData."
  },
  {
    id: 150, chapter: "Ch04",
    en: "Choose the INCORRECT information about built-in validation attributes.",
    vi: "Chọn thông tin SAI về built-in validation attributes.",
    options: [
      { label: "A", en: "[EmailAddress] validates email format.", vi: "[EmailAddress] kiểm tra định dạng email." },
      { label: "B", en: "[Compare] validates two properties match.", vi: "[Compare] kiểm tra 2 property khớp nhau." },
      { label: "C", en: "[RegularExpression] validates that property value is in a numeric range.", vi: "[RegularExpression] kiểm tra giá trị thuộc một khoảng số." },
      { label: "D", en: "[Required] validates that field is not null.", vi: "[Required] kiểm tra field không null." },
    ],
    answer: "C",
    explanation: "`[RegularExpression]` kiểm tra pattern regex, không phải kiểm tra range số. Kiểm tra khoảng dùng `[Range(min,max)]`."
  },
  {
    id: 151, chapter: "Ch05",
    en: "What is OData (Open Data Protocol)?",
    vi: "OData (Open Data Protocol) là gì?",
    options: [
      { label: "A", en: "Defines a method only for PUT with REST APIs.", vi: "Chỉ định nghĩa cách PUT cho REST API." },
      { label: "B", en: "Defines a method only for DELETE with REST APIs.", vi: "Chỉ định nghĩa cách DELETE cho REST API." },
      { label: "C", en: "Defines a set of best practices/conventions for building and consuming REST APIs with query capabilities.", vi: "Định nghĩa tập quy ước/thực hành tốt để xây và tiêu thụ REST API có khả năng query." },
      { label: "D", en: "Defines a method only for creating REST APIs.", vi: "Chỉ định nghĩa một cách để tạo REST API." },
    ],
    answer: "C",
    explanation: "OData mở rộng REST bằng query chuẩn qua URL (`$filter/$select/$expand/...`) để client tự điều chỉnh dữ liệu nhận về."
  },
  {
    id: 152, chapter: "Ch03",
    en: "What is a media type?",
    vi: "Media type là gì?",
    options: [
      { label: "A", en: "A media type (MIME type) identifies the format of data.", vi: "Media type (MIME type) dùng để định danh format dữ liệu." },
      { label: "B", en: "In HTTP, media type describes the message body format.", vi: "Trong HTTP, media type mô tả format của message body." },
      { label: "C", en: "All of the others.", vi: "Tất cả các ý trên." },
      { label: "D", en: "A media type has type and subtype strings.", vi: "Media type gồm type và subtype." },
    ],
    answer: "C",
    explanation: "A, B, D đều đúng. Ví dụ `application/json`: `application` là type, `json` là subtype."
  },
  {
    id: 153, chapter: "Ch04",
    en: "A binding source attribute defines where action parameter values come from. Which one is NOT a valid binding source attribute?",
    vi: "Binding source attribute định nghĩa nguồn lấy dữ liệu cho action parameter. Đâu KHÔNG phải attribute hợp lệ?",
    options: [
      { label: "A", en: "[FromQuery]", vi: "[FromQuery]" },
      { label: "B", en: "[FromRouting]", vi: "[FromRouting]" },
      { label: "C", en: "[FromHeader]", vi: "[FromHeader]" },
      { label: "D", en: "[FromServices]", vi: "[FromServices]" },
    ],
    answer: "B",
    explanation: "ASP.NET Core dùng `[FromRoute]` chứ không phải `[FromRouting]`. Các attribute còn lại đều hợp lệ."
  },
  {
    id: 154, chapter: "Ch09",
    en: "How to add gRPC services in Startup.cs?",
    vi: "Thêm gRPC services trong Startup.cs như thế nào?",
    options: [
      { label: "A", en: "public void ConfigureServices(IServiceCollection services) { services.AddGrpc(); }", vi: "public void ConfigureServices(IServiceCollection services) { services.AddGrpc(); }" },
      { label: "B", en: "public void ConfigureServices(IApplicationBuilder services) { services.AddGrpc(); }", vi: "public void ConfigureServices(IApplicationBuilder services) { services.AddGrpc(); }" },
      { label: "C", en: "public void Configure(IServiceCollection services) { services.AddGrpc(); }", vi: "public void Configure(IServiceCollection services) { services.AddGrpc(); }" },
      { label: "D", en: "public void Configure(IApplicationBuilder services) { services.AddGrpc(); }", vi: "public void Configure(IApplicationBuilder services) { services.AddGrpc(); }" },
    ],
    answer: "A",
    explanation: "`AddGrpc()` là service registration nên phải đặt trong `ConfigureServices(IServiceCollection ...)`."
  },
  {
    id: 155, chapter: "Ch04",
    en: "What is complex model binder?",
    vi: "Complex model binder là gì?",
    options: [
      { label: "A", en: "Maps complex request data from body into entity/model with proper content-type.", vi: "Map dữ liệu request phức tạp từ body vào entity/model với content-type phù hợp." },
      { label: "B", en: "Maps simple URL primitives to complex binder.", vi: "Map dữ liệu primitive từ URL bằng complex binder." },
      { label: "C", en: "Maps complex response body into request model.", vi: "Map response phức tạp vào request model." },
      { label: "D", en: "None of the others.", vi: "Không đáp án nào." },
    ],
    answer: "A",
    explanation: "Complex binder thường làm việc với object graph (DTO/entity) từ request body JSON/XML trong POST/PUT/PATCH."
  },
  {
    id: 156, chapter: "Ch01",
    en: "Choose correct information about ASP.NET Core HTTP verbs.",
    vi: "Chọn thông tin đúng về HTTP verbs trong ASP.NET Core.",
    options: [
      { label: "A", en: "PUT updates, DELETE deletes, GET retrieves, POST creates.", vi: "PUT cập nhật, DELETE xóa, GET lấy dữ liệu, POST tạo mới." },
      { label: "B", en: "PUT retrieves, GET updates, DELETE deletes, POST creates.", vi: "PUT lấy dữ liệu, GET cập nhật, DELETE xóa, POST tạo mới." },
      { label: "C", en: "PUT creates, DELETE deletes, GET retrieves, POST updates.", vi: "PUT tạo mới, DELETE xóa, GET lấy dữ liệu, POST cập nhật." },
      { label: "D", en: "None of the others.", vi: "Không đáp án nào." },
    ],
    answer: "A",
    explanation: "Đây là mapping CRUD kinh điển trong REST API. Dù thực tế có biến thể, A phản ánh quy ước chuẩn nhất."
  },
  {
    id: 157, chapter: "Ch04",
    en: "What is model binding?",
    vi: "Model binding là gì?",
    options: [
      { label: "A", en: "ASP.NET Core process that extracts data from HTTP requests and provides values to action parameters.", vi: "Quá trình ASP.NET Core trích dữ liệu từ HTTP request và gán vào action parameters." },
      { label: "B", en: "Process that extracts data from HTTP responses for action parameters.", vi: "Quá trình trích dữ liệu từ HTTP response cho action parameters." },
      { label: "C", en: "Process that extracts data from both HTTP responses and assigns to action parameters.", vi: "Quá trình trích dữ liệu từ HTTP response và gán vào action parameters." },
      { label: "D", en: "None of the others.", vi: "Không đáp án nào." },
    ],
    answer: "A",
    explanation: "Model binding đọc dữ liệu từ route/query/header/form/body và convert sang type .NET cho action method."
  },
  {
    id: 158, chapter: "Ch05",
    en: "How to register OData endpoints (classic Startup style)?",
    vi: "Đăng ký OData endpoint như thế nào (kiểu Startup cổ điển)?",
    options: [
      { label: "A", en: "app.UseEndpoints(endpoints => { endpoints.EnableDependencyInjection(); endpoints.Select().Count().Filter().OrderBy().MaxTop(100).SkipToken().Expand(); endpoints.MapControllers(); });", vi: "app.UseEndpoints(endpoints => { endpoints.EnableDependencyInjection(); endpoints.Select().Count().Filter().OrderBy().MaxTop(100).SkipToken().Expand(); endpoints.MapControllers(); });" },
      { label: "B", en: "app.UseEndpoints(endpoints => { endpoints.CreateDependencyInjection(); endpoints.Select().Count().Filter().OrderBy().MaxTop(100).SkipToken().Expand(); endpoints.EnableControllers(); });", vi: "app.UseEndpoints(endpoints => { endpoints.CreateDependencyInjection(); endpoints.Select().Count().Filter().OrderBy().MaxTop(100).SkipToken().Expand(); endpoints.EnableControllers(); });" },
      { label: "C", en: "app.CreateEndpoints(endpoints => { endpoints.EnableDependencyInjection(); endpoints.Select().Count().Filter().OrderBy().MaxTop(100).SkipToken().Expand(); endpoints.MapControllers(); });", vi: "app.CreateEndpoints(endpoints => { endpoints.EnableDependencyInjection(); endpoints.Select().Count().Filter().OrderBy().MaxTop(100).SkipToken().Expand(); endpoints.MapControllers(); });" },
      { label: "D", en: "app.CreateEndpoints(endpoints => { endpoints.CreateDependencyInjection(); endpoints.Select().Count().Filter().OrderBy().MaxTop(100).SkipToken().Expand(); endpoints.CreateControllers(); });", vi: "app.CreateEndpoints(endpoints => { endpoints.CreateDependencyInjection(); endpoints.Select().Count().Filter().OrderBy().MaxTop(100).SkipToken().Expand(); endpoints.CreateControllers(); });" },
    ],
    answer: "A",
    explanation: "Theo kiểu cấu hình OData cũ, `UseEndpoints` + `EnableDependencyInjection` + chain query options là pattern chuẩn; các hàm `Create...` ở lựa chọn khác không tồn tại."
  },
  {
    id: 159, chapter: "Ch10",
    en: "What is OWIN (Open Web Interface for .NET)?",
    vi: "OWIN (Open Web Interface for .NET) là gì?",
    options: [
      { label: "A", en: "None of the others.", vi: "Không đáp án nào." },
      { label: "B", en: "Defines a standard middleware pipeline interface for requests/responses.", vi: "Định nghĩa chuẩn interface middleware pipeline cho request/response." },
      { label: "C", en: "Allows decoupling web apps from web servers and interoperability with OWIN components.", vi: "Cho phép tách app web khỏi web server và tương tác với thành phần OWIN." },
      { label: "D", en: "All of the others.", vi: "Tất cả các ý trên." },
    ],
    answer: "D",
    explanation: "Trong ngữ cảnh đề thi, B và C đều đúng mô tả OWIN nên đáp án tổng hợp là D."
  },
  {
    id: 160, chapter: "Ch04",
    en: "Choose the incorrect information about ASP.NET Core Web API.",
    vi: "Chọn thông tin sai về ASP.NET Core Web API.",
    options: [
      { label: "A", en: "Designed as a service framework for building RESTful services.", vi: "Được thiết kế như framework dịch vụ để xây RESTful services." },
      { label: "B", en: "Based on MVC without the View part, optimized for headless services.", vi: "Dựa trên MVC bỏ phần View, tối ưu cho headless services." },
      { label: "C", en: "A client can interact with a resource by knowing only the resource without HTTP semantics.", vi: "Client chỉ cần biết resource, không cần semantics HTTP vẫn tương tác đầy đủ." },
      { label: "D", en: "Calls are based on core HTTP verbs and URI.", vi: "Request dựa trên HTTP verbs và URI." },
    ],
    answer: "C",
    explanation: "Web API dựa rất mạnh vào HTTP semantics (verb/status/header/content type), nên phát biểu \"chỉ cần biết resource\" là thiếu và sai."
  },
  {
    id: 161, chapter: "Ch10",
    en: "Choose the correct information about 'multiple receivers' communication in microservices.",
    vi: "Chọn thông tin đúng về kiểu giao tiếp 'multiple receivers' trong microservices.",
    options: [
      { label: "A", en: "All of the others.", vi: "Tất cả các ý trên." },
      { label: "B", en: "Each request can be processed by zero to multiple receivers.", vi: "Mỗi request/event có thể được xử lý bởi 0 đến nhiều receiver." },
      { label: "C", en: "Each request must be processed by exactly one receiver.", vi: "Mỗi request phải được xử lý bởi đúng 1 receiver." },
      { label: "D", en: "None of the others.", vi: "Không đáp án nào." },
    ],
    answer: "A",
    explanation: "Theo logic đề dạng pub/sub fan-out, B mô tả đúng bản chất multiple receivers. Đề gốc quy ước chọn đáp án tổng hợp A."
  },
  {
    id: 162, chapter: "Ch05",
    en: "Choose the correct information about EnableQueryAttribute ([EnableQuery]).",
    vi: "Chọn thông tin đúng về EnableQueryAttribute ([EnableQuery]).",
    options: [
      { label: "A", en: "None of the others.", vi: "Không đáp án nào." },
      { label: "B", en: "Defines a method to enable querying using OData syntax.", vi: "Định nghĩa một method để bật query theo cú pháp OData." },
      { label: "C", en: "Defines an attribute that can be applied to an action to enable querying with OData syntax.", vi: "Là attribute có thể gắn lên action để bật query theo cú pháp OData." },
      { label: "D", en: "Defines both attribute and method for enabling OData query.", vi: "Định nghĩa cả attribute và method để bật OData query." },
    ],
    answer: "C",
    explanation: "`[EnableQuery]` là attribute áp lên action/controller OData để cho phép client dùng query options như `$filter`, `$select`, `$orderby`."
  },
];
