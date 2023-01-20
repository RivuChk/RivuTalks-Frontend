plugins {
    kotlin("multiplatform") version "1.8.0"
    id("com.android.application")
    kotlin("android").version("1.8.0").apply(false)
}

group = "dev.rivu.rivutalks"
version = "1.0-SNAPSHOT"

repositories {
    google()
    mavenCentral()
}

object Versions {
    const val ktorVersion = "2.2.2"
    const val coroutineVersion = "1.6.4"
    const val koin = "3.2.0"
    const val composeVersion = "1.3.0"
}

kotlin {
    js(IR) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport {
                    enabled.set(true)
                }
            }
        }
    }
    android()
    sourceSets {

        val commonMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-core:${Versions.ktorVersion}")
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:${Versions.coroutineVersion}")
                implementation("io.insert-koin:koin-core:${Versions.koin}")
            }
        }
        val commonTest by getting {
            dependencies {
                implementation(kotlin("test"))
            }
        }
        val jsMain by getting {
            dependencies {
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react:18.2.0-pre.385")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react-dom:18.2.0-pre.385")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-emotion:11.10.4-pre.385")
            }
        }
        val jsTest by getting
        val androidMain by getting {
            dependencies {
                implementation("io.ktor:ktor-client-okhttp:$${Versions.ktorVersion}")
                implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:$${Versions.coroutineVersion}")
                implementation("io.insert-koin:koin-android:${Versions.koin}")

                implementation("com.google.android.material:material:1.7.0")
                implementation("androidx.compose.ui:ui:${Versions.composeVersion}")
                implementation("androidx.compose.material:material:${Versions.composeVersion}")
                implementation("androidx.compose.ui:ui-tooling-preview:${Versions.composeVersion}")
                implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.3.1")
                implementation("androidx.activity:activity-compose:1.3.0-alpha06")
//                androidTestImplementation("androidx.compose.ui:ui-test-junit4:$compose_version")
//                debugImplementation("androidx.compose.ui:ui-tooling:$compose_version")
            }
        }
        val androidTest by getting {
            dependencies {
                implementation("junit:junit:4.13.2")
            }
        }
    }
}

android {
    compileSdk = 32
    sourceSets["main"].manifest.srcFile("src/androidMain/AndroidManifest.xml")
    defaultConfig {
        applicationId = "dev.rivu.rivutalks.application"
        minSdkVersion(24)
        targetSdkVersion(32)
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
}