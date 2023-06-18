import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('cloud-resume')

def lambda_handler(event, context):
    headers = event.get('headers', {})
    origin = headers.get('Origin', '')
    referer = headers.get('Referer', '')

    if origin not in ['https://www.glenleach.net', 'https://resume.glenleach.net']:
        return {
            'statusCode': 403,
            'body': 'Unauthorized',
            'headers': {
                'Access-Control-Allow-Origin': '',
                'Access-Control-Allow-Credentials': True
            }
        }

    if referer not in ['https://www.glenleach.net', 'https://resume.glenleach.net']:
        return {
            'statusCode': 403,
            'body': 'Unauthorized',
            'headers': {
                'Access-Control-Allow-Origin': '',
                'Access-Control-Allow-Credentials': True
            }
        }

    response = table.get_item(Key={'id': '1'})
    views = response['Item']['views']
    views += 1
    print(views)

    response = table.put_item(Item={'id': '1', 'views': views})

    return {
        'statusCode': 200,
        'body': json.dumps(views),
        'headers': {
            'Access-Control-Allow-Origin': origin,
            'Access-Control-Allow-Credentials': True
        }
    }