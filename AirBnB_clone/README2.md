# AirBnB clone - Web dynamic  

<div class="panel panel-default" id="project-description">
  <div class="panel-body">
    <h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="https://jquery-tutorial.net/selectors/using-elements-ids-and-classes/" title="Selector" target="_blank">Selector</a> </li>
<li><a href="https://jquery-tutorial.net/dom-manipulation/getting-and-setting-content/" title="Get and set content" target="_blank">Get and set content</a> </li>
<li><a href="https://jquery-tutorial.net/dom-manipulation/getting-and-setting-css-classes/" title="Manipulate CSS classes" target="_blank">Manipulate CSS classes</a> </li>
<li><a href="https://jquery-tutorial.net/dom-manipulation/the-append-and-prepend-methods/" title="Manipulate DOM elements" target="_blank">Manipulate DOM elements</a> </li>
<li><a href="https://learn.jquery.com/using-jquery-core/document-ready/" title="Document ready" target="_blank">Document ready</a> </li>
<li><a href="https://jquery-tutorial.net/ajax/introduction/" title="Introduction" target="_blank">Introduction</a> </li>
<li><a href="https://jquery-tutorial.net/ajax/the-get-and-post-methods/" title="GET &amp; POST request" target="_blank">GET &amp; POST request</a> </li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" title="HTTP access control (CORS)" target="_blank">HTTP access control (CORS)</a> </li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/x4ZVwAvxdN7f6ZwP4hPoRQ" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<h3>General</h3>

<ul>
<li>How cool it is to request your own API</li>
<li>How to modify an HTML element style</li>
<li>How to get and update an HTML element content</li>
<li>How to modify the DOM</li>
<li>How to make a <code>GET</code> request with JQuery Ajax</li>
<li>How to make a <code>POST</code> request with JQuery Ajax</li>
<li>How to listen/bind to DOM events</li>
<li>How to listen/bind to user events</li>
</ul>

<h2>Requirements</h2>

<h3>General</h3>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code></li>
<li>All your files will be interpreted on Chrome (version 57.0)</li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should be <code>semistandard</code> compliant with the flag <code>--global $</code>: <code>semistandard (something).js --global $</code></li>
<li>All your JavaScript must be in the folder <code>scripts</code></li>
<li>You must use JQuery version 3.x</li>
<li>You are not allowed to use <code>var</code></li>
<li>HTML should not reload for each action: DOM manipulation, update values, fetch data&hellip;</li>
</ul>

<h3>GitHub</h3>

<p><strong>There should be one project repository per group. If you clone/fork/whatever a project repository with the same name before the second deadline, you risk a 0% score.</strong></p>

<h2>More Info</h2>

<h3>Import JQuery</h3>

<pre><code>&lt;head&gt;
    &lt;script src=&quot;https://code.jquery.com/jquery-3.2.1.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
</code></pre>

<h3>Before starting the project&hellip;</h3>

<p>You will work on a codebase using <a href="/rltoken/TC9ahZWJWQmSl3XVRKsEZg" title="Flasgger" target="_blank">Flasgger</a>, you will need to install it locally first before starting the RestAPI:</p>

<pre><code>$ sudo apt-get install -y python3-lxml
$ sudo pip3 install flask_cors # if it was not installed yet
$ sudo pip3 install flasgger
</code></pre>

<p>If the RestAPI is not starting, please read the error message. 
Based on the(ses) error message(s), you will have to troubleshoot potential dependencies issues. </p>

<p>Here some solutions:</p>

<h4><code>jsonschema</code> exception</h4>

<pre><code>$ sudo pip3 uninstall -y jsonschema 
$ sudo pip3 install jsonschema==3.0.1
</code></pre>

<h4><code>No module named &#39;pathlib2&#39;</code></h4>

<pre><code>$ sudo pip3 install pathlib2
</code></pre>

<h3>Expose ports from your Vagrant</h3>

<p>In your <code>Vagrantfile</code>, add this line for each port forwarded</p>

<pre><code># I expose the port 5001 of my vm to the port 5001 on my computer
config.vm.network :forwarded_port, guest: 5001, host: 5001 
</code></pre>

<p>if you need to expose other ports, same line but you will need to replace the &ldquo;guest port&rdquo; (inside your vagrant) and your &ldquo;host port&rdquo; (outside your vagrant, used from your browser for example)</p>

<p>It&rsquo;s important in your project, to use the AirBnB API with the port <code>5001</code></p>

<p><br />
<br />
<img src="https://github.com/carlalap/AirBnB_clone_v4/tree/master/web_static/images/Final.png" alt="" loading='lazy' style="" /></p>

<h3>Manual QA Review</h3>

<p><strong>It is your responsibility to request a review for this project from a peer before the project&rsquo;s deadline. If no peers have been reviewed, you should request a review from a TA or staff member.</strong></p>

  </div>
</div>

<div class="panel-heading panel-heading-actions">
   <h3 class="panel-title">
      0. Last clone!
    </h3>

 </div>

  <div class="panel-body">
   <span id="user_id" data-id="6138"></span>

   <!-- Progress vs Score -->
   <div class="task_progress_score_bar" data-task-id="19633" data-correction-id="485949">
   <div class="task_progress_bar">
   <div class="task_score_bar">
   </div>
   </div>
   <div class="task_progress_score_text">
   Score: <span class="task_score_value">0%</span> (<span class="task_progress_value">Checks completed: 0%</span>)
   </div>
   </div>
   <!-- Task Body -->
   <p>A new codebase again? Yes!</p>

<p>For this project you will fork this <a href="/rltoken/Ht4-G-5nt-6oHdOL2_zkpA" title="codebase" target="_blank">codebase</a>:</p>

<ul>
<li>Update the repository name to <code>AirBnB_clone_v4</code></li>
<li>Update the <code>README.md</code>:

<ul>
<li>Add yourself as an author of the project</li>
<li>Add new information about your new contribution</li>
<li>Make it better!</li>
</ul></li>
<li>If you&rsquo;re the owner of this codebase, create a new repository called <code>AirBnB_clone_v4</code> and copy over all files from <code>AirBnB_clone_v3</code> </li>
<li>If you didn&rsquo;t install Flasgger from the previous project, it&rsquo;s time! <code>sudo pip3 install flasgger</code></li>
</ul>

  </div>

  <div class="list-group">
    <!-- Task URLs -->

    <!-- Technical information -->
      <div class="list-group-item">
        <p><strong>Repo:</strong></p>
        <ul>
          <li>GitHub repository: <code>holbertonschool-AirBnB_clone_v4</code></li>
        </ul>
      </div>

    <!-- Self-paced manual review -->
  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Cash only
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>Write a script that starts a Flask web application:</p>

<ul>
<li>Based on <code>web_flask</code>, copy: <code>web_flask/static</code>, <code>web_flask/templates/100-hbnb.html</code>, <code>web_flask/__init__.py</code> and <code>web_flask/100-hbnb.py</code> into the <code>web_dynamic</code> folder</li>
<li>Rename <code>100-hbnb.py</code> to <code>0-hbnb.py</code></li>
<li>Rename <code>100-hbnb.html</code> to <code>0-hbnb.html</code></li>
<li>Update <code>0-hbnb.py</code> to replace the existing route to <code>/0-hbnb/</code></li>
</ul>

<p><strong>If <code>100-hbnb.html</code> is not present, use <code>8-hbnb.html</code> instead</strong></p>

<pre><code>guillaume@ubuntu:~/AirBnB_v4$ HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.0-hbnb
* Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
....
</code></pre>

<p>One problem now is the asset caching done by Flask.</p>

<p>To avoid that, you will add a query string to each asset:</p>

<p>In <code>0-hbnb.py</code>, add a variable <code>cache_id</code> to the <code>render_template</code>. The value of this variable must be an UUID (<code>uuid.uuid4()</code>)</p>

<p>In <code>0-hbnb.html</code>, add this variable <code>cache_id</code> as query string to each <code>&lt;link&gt;</code> tag URL</p>

<pre><code>guillaume@ubuntu:~/AirBnB_v4$ curl -s -XGET http://0.0.0.0:5000/0-hbnb/ | head -6
&lt;!DOCTYPE HTML&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../static/styles/4-common.css?e211c9eb-7d17-4f12-85eb-4d50fa50cb1d&quot; /&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../static/styles/3-header.css?e211c9eb-7d17-4f12-85eb-4d50fa50cb1d&quot; /&gt;
guillaume@ubuntu:~/AirBnB_v4$ curl -s -XGET http://0.0.0.0:5000/0-hbnb/ | head -6
&lt;!DOCTYPE HTML&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../static/styles/4-common.css?f834413e-0aa9-4767-b64a-c92db9cb1f82&quot; /&gt;
    &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;../static/styles/3-header.css?f834413e-0aa9-4767-b64a-c92db9cb1f82&quot; /&gt;
guillaume@ubuntu:~/AirBnB_v4$ 
</code></pre>

  </div>

<div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Select some Amenities to be comfortable!
    </h3>

    <div>
        <span class="label label-info">
          mandatory
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="6138"></span>

    <!-- Progress vs Score -->

    <!-- Task Body -->
    <p>For the moment the filters section is static, let&rsquo;s make it dynamic!</p>

<p>Replace the route <code>0-hbnb</code> with <code>1-hbnb</code> in the file <code>1-hbnb.py</code> (based on <code>0-hbnb.py</code>)</p>

<p>Create a new template <code>1-hbnb.html</code> (based on <code>0-hbnb.html</code>) and update it:</p>

<ul>
<li>Import JQuery in the <code>&lt;head&gt;</code> tag</li>
<li>Import the JavaScript <code>static/scripts/1-hbnb.js</code> in the <code>&lt;head&gt;</code> tag

<ul>
<li>In 1-hbnb.html and the following HTML files, add this variable cache_id as query string to the above <code>&lt;script&gt;</code> tag</li>
</ul></li>
<li>Add a <code>&lt;input type=&quot;checkbox&quot;&gt;</code> tag to the <code>li</code> tag of each amenity </li>
<li>The new checkbox must be at 10px on the left of the Amenity name</li>
<li>Add to the <code>input</code> tags of each amenity (<code>&lt;li&gt;</code> tag) the attribute <code>data-id=&quot;:amenity_id&quot;</code> =&gt; this will allow us to retrieve the Amenity ID from the DOM</li>
<li>Add to the <code>input</code> tags of each amenity (<code>&lt;li&gt;</code> tag) the attribute <code>data-name=&quot;:amenity_name&quot;</code> =&gt; this will allow us to retrieve the Amenity name from the DOM</li>
</ul>

<p>Write a JavaScript script (<code>static/scripts/1-hbnb.js</code>):</p>

<ul>
<li>Your script must be executed only when DOM is loaded</li>
<li>You must use JQuery</li>
<li>Listen for changes on each <code>input</code> checkbox tag:

<ul>
<li>if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)</li>
<li>if the checkbox is unchecked, you must remove the Amenity ID from the variable </li>
<li>update the <code>h4</code> tag inside the <code>div</code> Amenities with the list of Amenities checked </li>
</ul></li>
</ul>

<p>As example:</p>

<p><img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/9/8e3c27078d62806b8ad1c1a682fbb3a48636ab89.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230813%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230813T210750Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a20f9ad5cb38252369df0e4be196b0312c9cb87eefad7102f57c132597a526d2" alt="" loading='lazy' style="" />
<img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/9/4e5cecdd82a70f07cd283ef8e242ad325c95b564.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230813%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230813T210750Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=18c35899ebdff49c05c8851fdf80c30f51a0de7c19a007aa57d8517ebbac6f75" alt="" loading='lazy' style="" />
<img src="https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2020/9/fb54e3081e229654db6e71ba919db753a791dcc3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230813%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230813T210750Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=6c101f1c505cec7a2eddc91059f5ccc4b02e7245e6bdaa143966eaa29c4be853" alt="" loading='lazy' style="" /></p>

  </div>


