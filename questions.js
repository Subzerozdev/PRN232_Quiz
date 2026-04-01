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
];
