# Generated by Django 4.1.7 on 2023-03-07 01:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='models',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=50)),
                ('body', models.TextField(max_length=5000)),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
