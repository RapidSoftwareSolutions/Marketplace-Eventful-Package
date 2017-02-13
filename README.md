[![](https://scdn.rapidapi.com/RapidAPI_banner.png)](https://rapidapi.com/package/Eventful/functions?utm_source=RapidAPIGitHub_EventfulFunctions&utm_medium=button&utm_content=RapidAPI_GitHub) 

# Eventful Package
Search events and venues on Eventful's local event database.
* Domain: eventful.com
* Credentials: appKey, consumerKey, consumerSecret

## How to get credentials: 
0. [Create new](http://api.eventful.com/signup) Ebentful API account 
1. Request an application key.

## Eventful.createEvent
Add a new event record.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| title               | String     | The event title.
| startTime           | String     | The event start time in ISO 8601 format (e.g. '2005-03-01T19:00:00') or a readable alternative (e.g. '2005-03-01 19:00:00').
| stopTime            | String     | The event stop time, if any, in ISO 8601 format (see above).
| tzOlsonPath         | String     | The event timezone, as listed in the Olson timezones database (e.g. "America/New_York")
| allDay              | Boolean    | True ("1") if the event is an all-day event, false ("0") otherwise. (optional)
| description         | String     | The event description.
| privacy             | String     | The privacy setting for this event. (1 = public, 2 = private, 3 = semi-private) (optional, defaults to 1)
| tags                | String     | A space-delimited list of tags.
| free                | Boolean    | True ("1") if the event is free, false ("0") otherwise.
| price               | String     | A text string describing the event price. For example, this could indicate a price range ("$15 - $35"), free but donations requested ("$10 donation suggested"), or other special instructions ("Adults $15, children under eight $5"). Don't pass this parameter or leave it blank if there is no price information
| venueId             | Number     | The ID of the venue where this event occurs.
| parentId            | String     | The ID of this event's parent event.

## Eventful.getSingleEvent
Get an event record.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The ID of the requested event.
| imageSizes      | String     | A comma separted list of imageSizes desired.

## Eventful.updateSingleEvent
Modify an event record.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The event ID to modify.
| title               | String     | The event title.
| startTime           | String     | The event start time in ISO 8601 format (e.g. '2005-03-01T19:00:00') or a readable alternative (e.g. '2005-03-01 19:00:00').
| stopTime            | String     | The event stop time, if any, in ISO 8601 format (see above).
| tzOlsonPath         | String     | The event timezone, as listed in the Olson timezones database (e.g. "America/New_York")
| allDay              | Boolean    | True ("1") if the event is an all-day event, false ("0") otherwise. (optional)
| description         | String     | The event description.
| privacy             | String     | The privacy setting for this event. (1 = public, 2 = private, 3 = semi-private) (optional, defaults to 1)
| tags                | String     | A space-delimited list of tags.
| free                | Boolean    | True ("1") if the event is free, false ("0") otherwise.
| price               | String     | A text string describing the event price. For example, this could indicate a price range ("$15 - $35"), free but donations requested ("$10 donation suggested"), or other special instructions ("Adults $15, children under eight $5"). Don't pass this parameter or leave it blank if there is no price information
| venueId             | Number     | The ID of the venue where this event occurs.
| parentId            | String     | The ID of this event's parent event.

## Eventful.deleteSingleEvent
Withdraw (delete, remove) an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The id of the requested event.
| note                | String     | An optional note describing why the event has been withdrawn.

## Eventful.restoreSingleEvent
Restore a withdrawn event.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The id of the requested event.

## Eventful.searchEvents
Search for events.

| Field              | Type       | Description
|--------------------|------------|----------
| appKey             | credentials| Eventful app key.
| consumerKey        | credentials| Eventful consumer key.
| consumerSecret     | credentials| Eventful consumer secret.
| oauthToken         | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret   | String     | OAuth Access Token Secret from `getAccessToken` method.
| keywords           | String     | The search keywords.
| location           | String     | A location name to use in filtering the search results. Locations in the form `San Diego`, `San Diego, TX`, `London, United Kingdom`, and `Calgary, Alberta, Canada` are accepted, as are postal codes (`92122`) and venue IDs (`V0-001-000268633-5`). Common geocoordinate formats (`32.746682, -117.162741`) are also accepted, but the `within` parameter is required in order to set a search radius
| date               | String     | Limit this list of results to a date range, specified by label or exact range. Currently supported labels include: `All`, `Future`, `Past`, `Today`, `Last Week`, `This Week`, `Next week`, and months by name, e.g. `October`. Exact ranges can be specified the form 'YYYYMMDD00-YYYYMMDD00', for example '2012042500-2012042700'; the last two digits of each date in this format are ignored.
| category           | String     | Limit the search results to this category ID. A list of categories may be specified separated by commas. See /categories/list for a list of categories and their IDs.
| exCategory         | String     | Exclude search results from including this category ID.
| within             | String     | If within is set and the "location" parameter resolves to a specific geolocation, the search will be restricted to the specified radius. If the "location" parameter does not resolve to a specific location, this parameter is ignored.
| units              | String     | One of "mi" or "km", the units of the "within" parameter. Defaults to "mi".
| countOnly          | String     | If count_only is set, an abbreviated version of the output will be returned. Only total_items and search_time elements are included in the result.
| sortOrder          | String     | One of 'popularity', 'date', or 'relevance'. Default is 'relevance'.
| sortDirection      | String     | One of 'ascending' or 'descending'. Default varies by sort_order.
| pageSize           | String     | The desired number of results per page.
| pageNumber         | String     | The desired page number
| imageSizes         | String     | A comma separted list of image_sizes desired.
| languages          | String     | Return our guess of each event language. ("Undetermined" is a possibility)
| mature             | String     | Sets the level of filtering for events marked as "mature" due to keywords in the title or description. One of 'all' (no filtering), 'normal', or 'safe'.
| include            | String     | Indicates that optional sections should be included in the result XML.
| changeMultiDayStart| String     | If set changes the start_date of long duration events (lasting multiple days) to the beginning of the search date range. It will also give the next occurence of a recurring event after the start range.

## Eventful.reindexEvent
Update the search index for an event record.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The ID of the event to index.

## Eventful.getICalendarEventsFormat
Get events in iCalendar format.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| keywords        | String     | The search keywords.
| location        | String     | A location name to use in filtering the search results.
| date            | String     | Limit this list of results to the specified date range.
| within          | String     | Limit this list of results to the specified date range. Date ranges are specified by label. Currently supported labels include: "All", "Future", "Past", "Today", "Last Week", "This Week", "Next week", and months by name, e.g. "October".
| units           | String     | One of "mi" or "km", the units of the "within" parameter. Defaults to "mi".
| sortOrder       | String     | One of 'popularity', 'date', 'title', 'relevance', or 'venue_name'. Default is 'date'.
| sort_direction  | String     | One of 'ascending' or 'descending'. Default varies by sort_order.
| pageSize        | String     | The desired number of results per page. Default: 50, Maximum: 50.

## Eventful.getRSSEventsFormat
Get events in RSS format.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| keywords        | String     | The search keywords. 
| location        | String     | A location name to use in filtering the search results.
| date            | String     | Limit this list of results to the specified date range. Date ranges are specified by label.
| within          | Number     | If within is set and the "location" parameter resolves to a specific geolocation, the search will be restricted to the specified radius.
| units           | String     | One of "mi" or "km", the units of the "within" parameter. Defaults to "mi"
| sortOrder       | String     | One of 'popularity', 'date', 'title', 'relevance', or 'venue_name'. Default is 'date'.
| sortDirection   | String     | One of 'ascending' or 'descending'. Default varies by sort_order.
| pageSize        | String     | The desired number of results per page.

## Eventful.getEventTags
List all tags attached to an event.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The ID of the event.

## Eventful.getUsersEventGoing
List all users going to an event.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The ID of the event.

## Eventful.addEventTags
Add tags to an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The ID of the event to which these tags are being added.
| tags                | String     | The ID of the event to which these tags are being added.

## Eventful.removeEventTags
Remove tags from an event. Note: This method was previously called delete but has been renamed remove

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The ID of the event from which these tags are being deleted.
| tags                | String     | A space-delimited list of tags. Tags with spaces should be enclosed in quotes (e.g. "San Diego").

## Eventful.addEventComment
Add a comment to an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The ID of the event to which this comment is being added.
| comment             | String     | The body of the comment message.

## Eventful.updateEventComment
Make changes to an event comment.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| commentId           | String     | The ID of the comment to modify.
| comment             | String     | The new, modified comment to save.

## Eventful.removeEventComment
Remove a comment from an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| commentId           | String     | The ID of the comment to be deleted.

## Eventful.addEventURL
Add a URL to an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The ID of the event to which this link is being added.
| link                | String     | The URL of the link.
| description         | String     | The title of the link. 
| linkTypeId          | String     | The ID of the link type, as found in this list: 15: Blog, Box Office; 8: Chat; 23: Facebook; 1: Info; 21: Myspace; 3: News; 17: Official Site; 18: Podcast; 4: Review; 5: Sponsor; 6: Tickets; 14: Webcast; 19: Website; 20: Wiki; 16: Other

## Eventful.removeEventURL
Remove a URL from an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| linkId              | String     | The ID of the requested event.

## Eventful.addEventImage
Add an image to an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The event ID.
| imageId             | String     | The image ID.

## Eventful.removeEventImage
Remove an image from an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The event ID.
| imageId             | String     | The image ID.

## Eventful.addEventPerformer
Add a performer to an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The event ID.
| performerId         | String     | The performer ID.

## Eventful.removeEventPerformer
Remove a performer from an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The event ID.
| performerId         | String     | The performer ID.

## Eventful.addEventProperty
Add a property to an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The event ID.
| name                | String     | The property name.
| value               | String     | The property value.

## Eventful.getEventsProperties
List properties for an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The ID of the event.

## Eventful.removeEventProperty
Remove a property from an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The event ID.
| propertyId          | String     | The ID of the property to remove
| name                | String     | The name of the property to remove. NOTE: if name is specified, any property with this name will be removed from this event.

## Eventful.addEventCategory
Add a category to an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The event ID.
| categoryId          | String     | The category ID.

## Eventful.removeEventCategory
Remove a category from an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The event ID.
| categoryId          | String     | The category ID.

## Eventful.resolveDatesFromDateString
Resolve start and end dates from a date string.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| when            | String     | A string containing a date and optional time(s).

## Eventful.createVenue
Add a new venue record.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| name                | String     | The displayed name for this venue.
| address             | String     | The street address of the venue. (
| city                | String     | The city name.
| region              | String     | The name of the region (state, province, county) 
| postalCode          | String     | The postal code or ZIP code.
| country             | String     | The name of the country.
| description         | String     | The venue description.
| privacy             | String     | The privacy setting for this venue. (1 = public, 2 = private, 3 = semi-private)
| venueType           | String     | The type of venue (e.g. Cinema, Arena).
| url                 | String     | A URI link to further information about this venue.
| urlType             | String     | 
| parentId            | String     | The ID of this venue's parent venue.

## Eventful.getSingleVenue
Get a venue record.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The id of the requested venue.
| mature          | String     | Sets the level of filtering for events marked as "mature" due to keywords in the title or description. One of 'all' (no filtering), 'normal', or 'safe'.

## Eventful.updateSingleVenue
Make changes to a venue.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The venue ID to modify.
| name                | String     | The displayed name for this venue.
| address             | String     | The street address of the venue. (
| city                | String     | The city name.
| region              | String     | The name of the region (state, province, county) 
| postalCode          | String     | The postal code or ZIP code.
| country             | String     | The name of the country.
| description         | String     | The venue description.
| privacy             | String     | The privacy setting for this venue. (1 = public, 2 = private, 3 = semi-private)
| venueType           | String     | The type of venue (e.g. Cinema, Arena).
| url                 | String     | A URI link to further information about this venue.
| urlType             | String     | 
| parentId            | String     | The ID of this venue's parent venue.

## Eventful.deleteSingleVenue
Withdraw (delete, remove) a venue.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The id of the requested venue.
| note                | String     | An optional note describing why the venue has been withdrawn.

## Eventful.restoreSingleVenue
Restore a withdrawn venue.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The id of the requested venue.

## Eventful.searchVenues
Search for venues.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| keywords        | String     | The search keywords.
| location        | String     | A location name to use in filtering the search results. Locations in the form "San Diego", "San Diego, TX", "London, United Kingdom", and "Calgary, Alberta, Canada" are accepted.
| countOnly       | String     | If count_only is set, an abbreviated version of the output will be returned. Only total_items and search_time elements are included in the result.
| pageSize        | String     | The desired number of results per page.
| pageNumber      | String     | The desired page number.
| within          | Number     | If within is set and the location parameter resolves to a specific geolocation, the search will be restricted to the specified radius. 
| units           | String     | One of "mi" or "km", the units of the "within" parameter. Defaults to "mi".
| sort_order      | String     | One of 'popularity', 'relevance', or 'venue_name'. Default is 'relevance'.
| sortDirection   | String     | One of 'ascending' or 'descending'. Default varies by sort_order. 

## Eventful.getVenueTags
List all tags attached to an venue.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The ID of the venue.

## Eventful.addVenueTags
Adds a new tag to an venue.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| tags                | String     | A space-delimited list of tags. Tags with spaces should be enclosed in quotes
| id                  | String     | The ID of the venue to which these tags are being added.

## Eventful.deleteVenueTags
Remove tags from an venue.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The ID of the venue from which these tags are being deleted.
| tags                | String     | A space-delimited list of tags. Tags with spaces should be enclosed in quotes (e.g. "San Diego").

## Eventful.getICalendarVenueFormat
Get events at a venue in iCalendar format.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The id of the venue to use as the feed source.

## Eventful.getRSSVenueFormat
Get events at a venue in RSS format.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The id of the venue to use as the feed source.

## Eventful.addVenueComment
Add a comment to a venue.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The ID of the venue to which this comment is being added.
| comment             | String     | The body of the comment message.

## Eventful.updateVenueComment
Make changes to a venue comment.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| commentId           | String     | The ID of the comment to modify.
| comment             | String     | The new, modified comment to save.

## Eventful.removeVenueComment
Remove a comment from a venue.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| commentId           | String     | The ID of the comment to be deleted.

## Eventful.addVenueURL
Add a URL to a venue.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The ID of the venue to which this link is being added.
| link                | String     | The URL of the link.
| description         | String     | The title of the link.
| linkTypeId          | String     | The ID of the link type, as found in this list: 15: Blog, Box Office; 8: Chat; 23: Facebook; 1: Info; 21: Myspace; 3: News; 17: Official Site; 18: Podcast; 4: Review; 5: Sponsor; 6: Tickets; 14: Webcast; 19: Website; 20: Wiki; 16: Other

## Eventful.removeVenueURL
Remove a URL from an event.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| linkId              | String     | The ID of the link to be deleted.

## Eventful.addVenueProperty
Add a property to an venue.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The venue ID.
| name                | String     | The property name.
| value               | String     | The property value.

## Eventful.getVenueProperties
List properties for an venue.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The ID of the venue.

## Eventful.removeVenueProperty
Remove a property from an venue.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The venue ID.
| propertyId          | String     | The ID of the property to remove
| name                | String     | The name of the property to remove. NOTE: if name is specified, any property with this name will be removed from this venue.

## Eventful.resolveVenueFromLocationString
Resolve a venue from a location string.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| location            | String     | A venue name and/or city.

## Eventful.getUserCalendars
List a user's calendars.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| owner               | String     | The Eventful username of the calendars' owner. (optional, defaults to authenticated user)

## Eventful.getSingleCalendar
Get the settings for a user's calendar.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The calendar ID.

## Eventful.getUser
Get a user record.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The ID of the requested user.
| listCounts      | String     | List counts of user activity. Set to 1 to display this data.

## Eventful.searchesUsers
Searches for users.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| keywords        | String     | The search keywords
| sortOrder       | String     | Orders sorting of results by "relevance" (default), "username", "event_count", "venue_count", or "calendar_count".
| countOnly       | String     | If count_only is set, an abbreviated version of the output will be returned. Only total_items and search_time elements are included in the result.
| pageSize        | String     | The desired number of results per "page".
| page_number     | String     | The desired "page" number.

## Eventful.getUserGroups
List the groups of which a user is a member.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The user ID.

## Eventful.getUserRecentlyAddedVenues
List a user's recently added venues.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The user ID.

## Eventful.addLocaleToUserLocations
Add a locale to a user's saved locations.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The user ID.
| locale          | String     | The locale to add to the user.

## Eventful.getUserLocations
List a user's saved locations.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The user's ID. If not specified, the authenticated user by default.

## Eventful.deleteLocaleFromUserLocations
Delete a locale from a user's saved locations.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The user id from which to delete the locale.
| locale          | String     | The name of the locale to delete.

## Eventful.marksUserAsGoingToEvent
Removes a user from an event's "I'm going" list.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| eventId             | String     | The event ID.

## Eventful.removeUserFromGoingToEvent
Removes a user from an event's "I'm going" list.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| eventId             | String     | The event ID.

## Eventful.addSingleImage
Add an image to a performer.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| image               | File       | File upload URL from which to retrieve the image file.
| caption             | String     | A caption for this image.

## Eventful.createSinglePerformer
Add an image to a performer.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| name                | String     | The name of this performer.
| shortBio            | String     | A short biography of this performer.
| longBio             | String     | A detailed biography of this performer.
| tags                | String     | A space-delimited list of tags.

## Eventful.getSinglePerformer
Get the details for a performer.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The ID of the requested performer.
| showEvents      | Boolean    | If true, include the events list. (see below)
| image_sizes     | String     | A comma separted list of image_sizes desired.

## Eventful.updateSinglePerformer
Modify a performer.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The ID of the performer object to modify.
| name                | String     | The name of this performer.
| shortBio            | String     | A short biography of this performer.
| longBio             | String     | A detailed biography of this performer.
| tags                | String     | A space-delimited list of tags.

## Eventful.searchPerformers
Search for performers.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| keywords        | String     | The search keywords.
| countOnly       | String     | If count_only is set, an abbreviated version of the output will be returned. Only total_items and search_time elements are included in the result.
| sortOrder       | String     | One of 'relevance', 'name', 'event_count', 'demand_member_count', or 'created'
| sortDirection   | String     | One of 'ascending' or 'descending'. Default is 'ascending'.
| pageSize        | String     | The desired number of results per page. Maximum 100, defaults to 20
| pageNumber      | String     | The desired page number

## Eventful.deleteSinglePerformer
Delete a performer.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The performer ID to withdraw.
| note                | String     | A short reason why this performer was withdrawn.

## Eventful.addLinksToPerformer
Add links to an performer.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The performer ID.
| link                | String     | The link url being added.
| description         | String     | Description of the link being added.
| linkTypeId          | String     | The type of link being added. Corresponds to one of the follow values: 1 Info; 2 Office; 3 News; 4 Review; 5 Sponsor; 6 Tickets; 8 Chat; 14 Webcast; 15 Blog; 16 Other; 17 Official Site; 18 Podcast; 19 Website;; 20 Wiki; 21 MySpace; 22 Ringtone; 23 Facebook; 24 Official Tickets; 25 Twitter

## Eventful.removeLinksFromPerformer
Remove links from an performer.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The performer ID.
| linkId              | Number     | The link_id of the link being removed.

## Eventful.addImageToPerformer
Add an image to a performer.

| Field               | Type       | Description
|---------------------|------------|----------
| appKey              | credentials| Eventful app key.
| consumerKey         | credentials| Eventful consumer key.
| consumerSecret      | credentials| Eventful consumer secret.
| oauthToken          | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret    | String     | OAuth Access Token Secret from `getAccessToken` method.
| id                  | String     | The performer ID.
| imageId             | String     | The image ID

## Eventful.removeImageFromPerformer
Remove an image from a performer.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The performer ID.
| imageId         | String     | The image ID.

## Eventful.getPerformerEvents
Get all events for a performer.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The ID of the performer.
| pageSize        | String     | The page_size (number of events) to be returned
| pageNumber      | String     | The page number of events to be returned (defaults to 1).

## Eventful.getPerformersBasedOnIds
Get all performers based on external ids (facebook, etc).

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| source          | String     | The source of the external ids (facebook ids should be fb_uid) for other providers please contact eventful to see if we support them.
| ids             | Number     | Comma separated list of ids to map to eventul performer ids.

## Eventful.getSingleDemand
Get the details for a demand.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| id              | String     | The ID of the requested demand.

## Eventful.searchDemands
Search for demands.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| keywords        | String     | The search keywords.
| location        | String     | A location name to use in filtering the search results.
| countOnly       | String     | If count_only is set, an abbreviated version of the output will be returned. Only total_items and search_time elements are included in the result.
| sortOrder       | String     | One of 'relevance', 'name', 'category', 'member_count', 'performer', or 'created'
| sortDirection   | String     | One of 'ascending' or 'descending'. Default is 'ascending'.
| pageSize        | String     | The desired number of results per page. Maximum 100, defaults to 20.
| pageNumber      | String     | The desired page number.

## Eventful.getCategories
List the available categories.

| Field           | Type       | Description
|-----------------|------------|----------
| appKey          | credentials| Eventful app key.
| consumerKey     | credentials| Eventful consumer key.
| consumerSecret  | credentials| Eventful consumer secret.
| oauthToken      | String     | OAuth Access Token from `getAccessToken` method.
| oauthTokenSecret| String     | OAuth Access Token Secret from `getAccessToken` method.
| subcategories   | String     | Optional - set to 1 to get subcategory information back.
| aliases         | String     | Optional - set to 1 to get category aliases back in the results.
