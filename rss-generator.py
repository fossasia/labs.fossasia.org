import mechanize
from feedgen.feed import FeedGenerator
import urlparse
from bs4 import BeautifulSoup

def generateFeed(urls):
    fg = FeedGenerator()
    fg.title('Google Search Results')
    fg.link(href='http://google.com', rel='alternate')
    fg.description('Google Seach Results')
    for url in urls:
        fe = fg.add_entry()
        fe.title(url[0])
        fe.link({'href': url[1], 'rel':'alternate'})
    fg.rss_file('rss.xml')

def google_search(query):
    urls = []
    response = get_results_page(query)
    soup = BeautifulSoup(response.read(), 'html.parser')
    # Search for all relevant 'a' tags
    for a in soup.select('.r a'):
        parsed_url = urlparse.urlparse(a['href'])
        # Validate url
        if 'url' in parsed_url.path:
            urls.append([a.text, str(urlparse.parse_qs(parsed_url.query)['q'][0])])
    return urls

def get_results_page(query):
    br = mechanize.Browser()
    br.set_handle_robots(False)
    br.addheaders = [('User-agent','Mozilla/5.0')]
    br.open('http://www.google.com/')
    br.select_form(name='f')
    br.form['q'] = query
    return br.submit()

def main():
    query = raw_input("What do you want to search for ? >> ")
    urls = google_search(query)
    generateFeed(urls)

if __name__ == "__main__":
    main()
